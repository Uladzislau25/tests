
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

                        <tr>
                            <td>{}</td>
                            <td></td>
                        </tr>
                </tbody>
            </table>

        </div>
    );
};
