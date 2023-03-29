import { Container } from "./styles";
import { Tag } from "../Tags";

export function Note({data , ...rest}) {

    return(
        <Container {...rest}>
            
            <h2>{data.title}</h2>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => (<Tag title={tag.name} key={tag.id} />) )
                    }
                </footer>
            }
        </Container>
    )
}