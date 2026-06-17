<template>
  <div class="editor-wrapper">
    <!-- Toolbar -->
    <div v-if="editor" class="toolbar">
      <button 
        type="button"
        @click="editor.chain().focus().toggleBold().run()" 
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        Bold
      </button>
      <button 
        type="button"
        @click="editor.chain().focus().toggleItalic().run()" 
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        Italic
      </button>
      <button 
        type="button"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" 
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        H1
      </button>
      <button 
        type="button"
        @click="editor.chain().focus().toggleBulletList().run()" 
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        Bullet List
      </button>
      <button 
        type="button"
        @click="editor.chain().focus().undo().run()">
        Undo
      </button>
      <button 
        type="button"
        @click="editor.chain().focus().redo().run()">
        Redo
      </button>
    </div>

    <!-- Editor Content -->
    
    <EditorContent :editor="editor" class="editor-content" />
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

// Emit updated content to parent components
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

// Initialize the Tiptap editor
const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
  ],
  editorProps: {
    attributes: {
      class: 'editor-input',
    },
  },
  onUpdate: ({ editor }) => {
    // Send updated HTML back to the parent component
    emit('update:modelValue', editor.getHTML())
  },
})
</script>

<style scoped>
.editor-wrapper {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
}

.toolbar {
  display: flex;
  gap: 8px;
  padding: 10px;
  background-color: #f3f4f6;
  border-bottom: 1px solid #ccc;
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
  font-size: 2em;
  margin: 0.67em 0;
}

:deep(ul) {
  padding-left: 20px;
  list-style-type: disc;
}
</style>
