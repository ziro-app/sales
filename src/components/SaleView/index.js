import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/index'
import { container, row, label, data, select, link, edit } from './styles'

const SaleView = ({ match: { path, params: { id } } }) =>
	<Header title={`Atendimento ${id}`} path={path}>
		<div style={container}>
			<div style={row}>
				<span style={label}>Início</span>
				<span style={data}>01/01/2019</span>
			</div>
			<div style={row}>
				<span style={label}>Assessor</span>
				<span style={data}>Rubia</span>
			</div>
			<div style={row}>
				<span style={label}>Lojista</span>
				<span style={data}>CLAUDIA CAMPELO DE OLIVEIRA</span>
			</div>
			<div style={row}>
				<span style={label}>Categoria</span>
				<span style={data}>Troca</span>
			</div>
			<div style={row}>
				<span style={label}>Tipo</span>
				<span style={data}>Online</span>
			</div>
			<div style={row}>
				<span style={label}>Fim</span>
				<span style={data}>02/01/2019</span>
			</div>
			<div style={row}>
				<span style={label}>Status</span>
				<select style={select}>
					{['Aberto', 'Entregue'].map( (option, index) =>
						<option value={option} key={index}>{option}</option>
					)}
				</select>
			</div>
			<Link style={link} to={`/atendimentos/${id}/editar`}>
				<input style={edit} type='submit' value='Editar' />
			</Link>
		</div>
	</Header>

export default SaleView