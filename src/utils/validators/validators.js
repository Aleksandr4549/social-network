export const maxLength = max => value => {
    return value && value.length > max ? `Must be ${max} characters or less` : undefined
}

export const required = value => value ? undefined : 'Required'