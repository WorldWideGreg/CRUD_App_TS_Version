export type dataForForms = {
  formData : any,
  setFormData : any,
  formId? : any,
}

export type UserTypes = {
    _id?: number
    firstName?: string
    lastName?: string
    name?: string
    avatar: string
    email: string
    salary: string
    date: string
    status: string 
  }

export type Data = {
    method?: string
    name?: string
    user?: string
    error?: string
    users?: any[]
    deleted?: string
  }
