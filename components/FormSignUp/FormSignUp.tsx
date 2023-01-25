import React from 'react'
import Script from 'next/script'
import styles from './FormSignUp.module.scss'

const FormSignUp = () => {
	// const css = `form, label, input {font-family: "IBM Plex Sans", "Helvetica Neue", Arial, sans-serif;}.submitted-message{color:#044317 !important;}.hs-button{background:#044317 !important;border:none;font-size: 16px !important;font-weight: 300 !important;padding: 1.25rem;}.hs-button:hover{background:#6fdc8c !important;}.inputs-list{padding-left: 0;}.hs-error-msgs{margin-top:1rem;}.hs-form-booleancheckbox label,.hs-form-booleancheckbox a:link,.hs-form-booleancheckbox a:visited {color: #044317 !important;}`
	let css = `
	form, label, .hs-input, .hs-button {
		font-family: "IBM Plex Sans", "Helvetica Neue", Arial, sans-serif !important;
	}
	.submitted-message {
		color:#044317 !important;
	}
	.hs-input[type=email] {
		height: 48px;
		width: 100%;
		max-width: none;
		border: none;
		border-bottom: solid 1px #8D8D8D;
		padding: 0 16px;
	}
	.hs-input[type=email]:focus {
		border: solid 2px #0F62FE;
		padding-left: 14px;
		padding-right: 14px;
	}
	.hs-button {
		background:#044317 !important;
		border:none;
		font-size: 16px !important;
		font-weight: 300 !important;
		padding: 1.25rem;
		padding-right: 3rem;
	}
	.hs-button:hover {
		background:#6fdc8c !important;
	}
	.inputs-list {
		padding-left: 0;
	}
	.hs-error-msgs {
		margin-top:1rem;
	}
	.hs-form-booleancheckbox a:link,
	.hs-form-booleancheckbox a:visited {
		color: #044317 !important;
	}
	.hs-input[type=checkbox] {
		width: 16px;
		height: 16px;
		margin: 2px 10px 2px 0;
		vertical-align: bottom;
	}
	.hs-form-field label {
		font-size: 14px !important;
		line-height: 14px !important;
	}
	.hs-form-field label.hs-form-booleancheckbox-display {
		font-size: 14px !important;
		line-height: 20px !important;
		display: inline-block;
		color: #044317 !important;
	}
	.hs-form-field label:not(.hs-error-msg):not(.hs-form-booleancheckbox-display) {
		color: #0F62FE !important;
	}
	`
	css = css.replace(/(\n|\t)/gi, '')
	return (
		<>
			<Script
				id='hsforms'
				charSet='utf-8'
				type='text/javascript'
				strategy='beforeInteractive'
				src='https://js.hsforms.net/forms/embed/v2.js'
			></Script>
			<Script>
				{`hbspt.forms.create({region: "na1", portalId: "22330883", formId: "bb029b98-d69a-4b70-9fae-e3ef61a364be", target: "#signup-form", cssRequired: '${css}'})`}
			</Script>
		</>
	)
}

export default FormSignUp
