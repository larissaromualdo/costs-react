import styles from '../project/ProjectForm.module.css'
import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'


function ServiceForm() {

    function submit() {
        
    }

    return(
        <form onSubmit={submit}>
            <input type="text" />
        </form>
    )

}

export default ServiceForm