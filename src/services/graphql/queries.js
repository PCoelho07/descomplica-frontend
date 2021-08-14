import { gql } from '@apollo/client'

export const loadStudent = gql`
    query LoadStudents($term: String) {
        students(name: $term, cpf: $term, email: $term) {
            name
            cpf
            email
        }
    }
`