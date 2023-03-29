export const personalBankingFilters = {
  "page": "Personal banking",
  "filtri": [
    {
      element: "input",
      type: "text",
      label: "Name",
      name: "name",
      hidden: false,
      disabled: false,
      required: true,
      placeholder: "Enter your name",
      section: "Personal Information"
    },
    {
      element: "input",
      type: "email",
      label: "Email",
      name: "email",
      hidden: false,
      disabled: false,
      required: true,
      placeholder: "Enter your email address",
      section: "Personal Information"
    },
    {
      element: "textarea",
      label: "Message",
      name: "message",
      placeholder: "Enter your message",
      required: true,
      validation: {
        maxLength: 500
      },
      section: "Message"
    },
    {
      element: "select",
      label: "Country",
      name: "country",
      hidden: false,
      disabled: false,
      required: true,
      options: [
        { value: "Usa", label: "USA" },
        { value: "Canada", label: "Canada" },
        { value: "Mexico", label: "Mexico" },
        { value: "Uk", label: "UK" },
        { value: "Germany", label: "Germany" }
      ],
      section: "Location Information"
    },
    {
      element: "input",
      type: "checkbox",
      label: "Interests",
      name: "interests",
      hidden: false,
      disabled: false,
      required: false,
      section: "Interests"
    },
    {
      element: "input",
      type: "checkbox",
      label: "Conto bancario",
      name: "contoBancario",
      hidden: false,
      disabled: false,
      required: false,
      section: "Conto bancario"
    },
  ]
}

export const businessBankingFilters = {
  "page": "Bussines banking",
  "filtri": [
    {
      element: "input",
      type: "text",
      label: "First Name",
      name: "firstName",
      placeholder: "Enter your first name",
      required: true,
      validation: {
        maxLength: 50,
        pattern: "^[a-zA-Z]+$"
      },
      section: "Personal Information"
    },
    {
      element: "input",
      type: "text",
      label: "Last Name",
      name: "lastName",
      placeholder: "Enter your last name",
      required: true,
      validation: {
        maxLength: 50,
        pattern: "^[a-zA-Z]+$"
      },
      section: "Personal Information"
    },
    {
      element: "input",
      type: "checkbox",
      label: "Interests",
      name: "interests",
      hidden: false,
      disabled: false,
      required: false,
      section: "Interests"
    },
    {
      element: "input",
      type: "checkbox",
      label: "Conto bancario",
      name: "contoBancario",
      hidden: false,
      disabled: false,
      required: false,
      section: "Conto bancario"
    },
    {
      element: "input",
      type: "email",
      label: "Email",
      name: "email",
      placeholder: "Enter your email address",
      required: true,
      validation: {
        maxLength: 100,
        pattern: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"
      },
      section: "Contact Information"
    },
    {
      element: "input",
      type: "tel",
      label: "Phone",
      name: "phone",
      placeholder: "Enter your phone number",
      required: false,
      validation: {
        maxLength: 15,
        pattern: "^\\+(?:[0-9] ?){6,14}[0-9]$"
      },
      section: "Contact Information"
    },
    {
      element: "textarea",
      label: "Comment",
      name: "comment",
      hidden: false,
      disabled: false,
      required: true,
      placeholder: "Enter your comment",
      section: "Personal Information"
    },
    {
      element: "input",
      type: "date",
      label: "Date of Birth",
      name: "dob",
      required: true,
      section: "Personal Information"
    },
    {
      element: "select",
      type: "select",
      label: "Gender",
      name: "gender",
      placeholder: "Select your gender",
      required: true,
      options: [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Other", label: "Other" }
      ],
      section: "Personal Information"
    },
    {
      element: "textarea",
      label: "Message",
      name: "message",
      placeholder: "Enter your message",
      required: true,
      validation: {
        maxLength: 500
      },
      section: "Message"
    },
  ]
}
