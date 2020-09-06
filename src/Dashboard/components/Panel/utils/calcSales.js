const calcSales = (filterAssessores, arrayAssessores, sales) => {
    const salesValue = filterAssessores && arrayAssessores.includes(filterAssessores) ? sales.filter(sale => sale[2] === filterAssessores) : sales
    return salesValue
}

export default calcSales