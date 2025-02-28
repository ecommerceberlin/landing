import { create } from 'zustand'
import { FormSchemaDefinitions } from '@/lib/schemas'

interface FormNavigationState {
  currentFieldIndex: number
 
  initialData: Record<string, any>

  //set from schema
  fields: string[]
  fieldTypes: Record<string, string>
  fieldDescriptions: Record<string, string>
  fieldLabels: Record<string, Record<string, string>>
  //evaluated
  preventAutoAdvance: boolean
  inSummaryMode: boolean
  disableAutoAdvance: boolean
}

interface FormNavigationActions {
  setFieldsFromSchema: (schema: FormSchemaDefinitions) => void
  nextField: () => void
  previousField: () => void
  setInSummaryMode: (inSummary: boolean) => void
  navigateToField: (index: number) => void
  setPreventAutoAdvance: (prevent: boolean) => void
  autoAdvanceIfValid: () => void
  enableAutoAdvance: () => void
  setInitialData: (initialData: Record<string, any> | undefined) => void

}

export const useFormNavigation = create<FormNavigationState & FormNavigationActions>((set, get) => ({
  currentFieldIndex: 0,
  fields: [],
  preventAutoAdvance: false,
  inSummaryMode: false,
  disableAutoAdvance: false,
  initialData: {},
  fieldTypes: {},
  fieldDescriptions: {},
  fieldLabels: {},
  setFieldsFromSchema: (schema: FormSchemaDefinitions) => {
    const { fieldTypes, fieldDescriptions, fieldLabels } = Object.entries(schema).reduce((acc, [field, def]) => ({
      fieldTypes: { ...acc.fieldTypes, [field]: def.type },
      fieldDescriptions: { ...acc.fieldDescriptions, [field]: def.description },
      fieldLabels: { ...acc.fieldLabels, [field]: def.labels || {} }
    }), { fieldTypes: {}, fieldDescriptions: {}, fieldLabels: {} })

    set({
      fieldTypes,
      fieldDescriptions,
      fieldLabels,
      fields: Object.keys(fieldTypes),
    })
  },

  nextField: () => {
    const { currentFieldIndex, fields } = get()
    const isLastField = currentFieldIndex === fields.length - 1
    
    if (isLastField) {
      set({ inSummaryMode: true, preventAutoAdvance: true })
    } else {
      set({
        currentFieldIndex: currentFieldIndex + 1,
        preventAutoAdvance: false
      })
    }
  },

  previousField: () => set((state) => ({
    currentFieldIndex: Math.max(state.currentFieldIndex - 1, 0),
    preventAutoAdvance: true
  })),

  
  setInitialData: (initialData) => set({ initialData }),

  setInSummaryMode: (inSummary) => set({ 
    inSummaryMode: inSummary,
    preventAutoAdvance: inSummary
  }),

  navigateToField: (index) => set({
    currentFieldIndex: index,
    inSummaryMode: false,
    preventAutoAdvance: true
  }),

  autoAdvanceIfValid: () => {
    const state = get()
    if (!state.disableAutoAdvance && 
        state.currentFieldIndex < state.fields.length - 1 && 
        !state.preventAutoAdvance) {
      set({ currentFieldIndex: state.currentFieldIndex + 1 })
    }
  },

  setPreventAutoAdvance: (prevent) => set({ preventAutoAdvance: prevent }),
  enableAutoAdvance: () => set({ 
    disableAutoAdvance: false,
    preventAutoAdvance: false 
  })
}))

