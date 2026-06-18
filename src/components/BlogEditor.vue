<template>
  <div class="editor-wrapper">
    <!-- Toolbar -->
    <div v-if="editor" class="toolbar">
      <button 
        type="button"
        @click="editor.chain().focus().toggleBold().run()" 
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        <Bold class="h-4 w-4"/>
      </button>

      <button 
        type="button"
        @click="editor.chain().focus().toggleItalic().run()" 
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        <Italic class="h-4 w-4" />
      </button>

      <select
        :value="currentHeading"
        @change="setHeadingLevel"
        class="toolbar-select"
      >
        <option value="0">Paragraph</option>
        <option value="1">H1</option>
        <option value="2">H2</option>
        <option value="3">H3</option>
        <option value="4">H4</option>
        <option value="5">H5</option>
        <option value="6">H6</option>
      </select>

      <button 
        type="button"
        @click="editor.chain().focus().toggleOrderedList().run()" 
        :class="{ 'is-active': editor.isActive('orderList') }"
      >
        <ListOrdered class="h-4 w-4" />
      </button>

      <button 
        type="button"
        @click="editor.chain().focus().toggleBulletList().run()" 
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        <List class="h-4 w-4" />
      </button>

      <button 
        type="button"
        @click="editor.chain().focus().undo().run()">
        <undo class="h-4 w-4" />
      </button>

      <button 
        type="button"
        @click="editor.chain().focus().redo().run()">
        <Redo class="h-4 w-4" />
      </button>

      <button
        type="button"
        @click="editor.chain().focus().setTextAlign('left').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
      >
        <AlignLeft class="h-4 w-4" />
      </button>

      <button
        type="button"
        @click="editor.chain().focus().setTextAlign('center').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
      >
        <AlignCenter class="h-4 w-4" />
      </button>

      <button
        type="button"
        @click="editor.chain().focus().setTextAlign('right').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
      >
        <AlignRight class="h-4 w-4" />
      </button>

      <button
        type="button"
        @click="editor.chain().focus().setTextAlign('justify').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
      >
        <AlignJustify class="h-4 w-4" />
      </button>
      
      <input
        type="file"
        accept="image/*"
        ref="fileInput"
        class="hidden"
        @change="handleImageUpload"
      />

      <button type="button" @click="triggerFileSelect">
        <ImagePlus class="w-4 h-4" />
      </button>
    </div>

    <!-- Editor Content -->
    
    <EditorContent :editor="editor" class="editor-content" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'  
import { ImagePlus, Bold, Italic, Undo, Redo, List, ListOrdered, AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify } from 'lucide-vue-next'

// Emit updated content to parent components
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
    Image,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
  ],
  editorProps: {
    attributes: {
      class: 'editor-input',
    },
  },
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getHTML())
  },
})

watch(
  () => props.modelValue,
  (newValue) => {
    if (!editor.value) return

    if (editor.value.getHTML() !== newValue) {
      editor.value.commands.setContent(newValue || '')
    }
  }
)

const fileInput = ref<HTMLInputElement | null>(null)

// upload image
async function uploadImage(file: File) {
  const formData = new FormData()
  formData.append('file', file)

  const res = await fetch('https://localhost:44375/api/upload', {
    method: 'POST',
    body: formData,
  })

  const data = await res.json()
  return data.url
}

// handle file input
async function handleImageUpload(e: Event) {
  const input = e.target as HTMLInputElement
  const file = input.files?.[0]

  if (!file || !editor.value) return

  const url = await uploadImage(file)

  editor.value.chain().focus().setImage({ src: url }).run()

  input.value = ''
}

// trigger input click
function triggerFileSelect() {
  fileInput.value?.click()
}

const currentHeading = computed(() => {
  if (!editor.value) return 0

  for (let i = 1; i <= 6; i++) {
    if (editor.value.isActive('heading', { level: i })) {
      return i
    }
  }

  return 0
})

function setHeadingLevel(event: Event) {
  const level = Number((event.target as HTMLSelectElement).value)

  if (!editor.value) return

  if (level === 0) {
    editor.value.chain().focus().setParagraph().run()
  } else {
    editor.value
      .chain()
      .focus()
      .toggleHeading({ level: level as 1 | 2 | 3 | 4 | 5 | 6 })
      .run()
  }
}
</script>

<style scoped>
.editor-wrapper {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  max-width: 800px;
}

.toolbar {
  display: flex;
  gap: 8px;
  padding: 10px;
  background-color: #f3f4f6;
  border-bottom: 1px solid #ccc;
}

.toolbar-select {
  padding: 6px 12px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  background: white;
  font-size: 14px;
}

.toolbar button {
  padding: 6px 12px;
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}

.toolbar button:hover {
  background-color: #e5e7eb;
}

.toolbar button.is-active {
  background-color: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.editor-content {
  max-height: 400px;
  overflow-y: auto;
}

:deep(.ProseMirror) {
  padding: 24px;
  min-height: 350px;
  outline: none;
}
/* Basic styling for Tiptap's output tags inside the editor */
:deep(.editor-input:focus) {
  outline: none;
}

:deep(h1) {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 1rem 0;
}

:deep(h2) {
  font-size: 2rem;
  font-weight: 700;
  margin: 0.875rem 0;
}

:deep(h3) {
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0.75rem 0;
}

:deep(h4) {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0.75rem 0;
}

:deep(h5) {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.5rem 0;
}

:deep(h6) {
  font-size: 1rem;
  font-weight: 600;
  margin: 0.5rem 0;
}

:deep(ul) {
  padding-left: 20px;
  list-style-type: disc;
}

:deep(ol) {
  padding-left: 20px;
  list-style-type: decimal;
}

:deep(li) {
  margin: 0.25rem 0;
}

</style>
