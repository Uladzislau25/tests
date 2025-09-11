type TableCarsType = {
    cars: TypeCars[]
}
type TypeCars = {
    manufacturer: string
    model: string
}

export const Table = (props: TableCarsType) => {
    return (
        <div>
            <table>

                <thead>
                <tr>
                    <th scope="col">Manufacturer</th>
                    <th scope="col">Model</th>
                </tr>
                </thead>

                <tbody>
                {props.cars.map(car => {
                    return (
                        <tr>
                            <td>{car.manufacturer}</td>
                            <td>{car.model}</td>
                        </tr>)
                })}
                </tbody>
            </table>

        </div>
    );
};
