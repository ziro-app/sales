import React from 'react'
import Header from '../Header/index'
import { container, row, label } from './styles'

const SaleView = ({ match: { path, params: { id } } }) =>
	<Header title={`Atendimento ${id}`} path={path}>
		<div style={container}>
			<div style={row}>
				<span style={label}>Início</span>
				<span>01/01/2019</span>
			</div>
			<div style={row}>
				<span style={label}>Assessor</span>
				<span>Rubia</span>
			</div>
			<div style={row}>
				<span style={label}>Lojista</span>
				<span>CLAUDIA CAMPELO DE OLIVEIRA</span>
			</div>
			<div style={row}>
				<span style={label}>Categoria</span>
				<span>Troca</span>
			</div>
			<div style={row}>
				<span style={label}>Tipo</span>
				<span>Online</span>
			</div>
			<div style={row}>
				<span style={label}>Fim</span>
				<span>02/01/2019</span>
			</div>
			<div style={row}>
				<span style={label}>Status</span>
				<span>Aberto</span>
			</div>
		</div>
	</Header>

export default SaleView