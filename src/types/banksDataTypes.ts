export interface Bank {
  _id: string
  name: string
  type: string
  auth_methods: AuthMethod[]
  icon: string
  identifier: string
  primaryColor: string
  country: string
  ui: Ui2
  bank_code?: string | null
  products: string[]
  forgotPasswordLink?: string | null
  timeout?: number
  bankCode?: string | null
  sandbox?: Sandbox
}

export interface AuthMethod {
  type: string
  name: string
  ui: Ui
  _id: string
  requires_reauth?: boolean
}

export interface Ui {
  title: string
  form: Form[]
}

export interface Form {
  type: string
  name: string
  hint: string
  contentType: string
  maxLength?: number
  length?: number
  value?: string
}

export interface Ui2 {
  title: string
  form: Form2[]
}

export interface Form2 {
  type: string
  name: string
  hint: string
  contentType: string
  maxLength?: number
}

export interface Sandbox {
  account_type: string
}
