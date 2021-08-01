import { DataRepo } from "./data/DataRepo"
import { DataRepoImpl } from "./data/DataRepoImpl" 

export const Header = () => {
    const dataRepo: DataRepo = new DataRepoImpl()

    return (
        <h1>
            { dataRepo.getHeading() }
        </h1>
    )
}