import { GridContainer } from "./GridContainer.styles";

export function Grid({ size }) {

    return (
        <div>
            <h1>Grid</h1>
            <p>This is the Grid component with size: {size}</p>
           
           <GridContainer size={size}>

               { Array.from({length: size * size}).map((_, index) => (
                        <div key={index}
                        > <input type="number" />
                        </div>
                ))
            }
            </GridContainer>
        </div>
    );
}