import { open, scheduled, payment } from './utils/filters'

const FilteredTable = ({ name, sales }) => {
	switch (name) {
		case 'Abertos': return open(name, sales)
		case 'Agendados':  return scheduled(name, sales)
	}
}

export default FilteredTable