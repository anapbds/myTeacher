import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, Nome, Valor } from "./Lista.style"
import { Button } from "@mui/material";

const Lista = () => {
    return(
        <ListaStyled>
            <ItemLista>
                <Foto src="https://github.com/anapbds.png"/>
                <Informacoes>
                    <Nome>Ana Paula Bernardes</Nome>
                    <Valor>R$100,00</Valor>
                    <Descricao>Aulas de programação</Descricao>
                    <Button>Marcar aula</Button>
                </Informacoes>
            </ItemLista>

        </ListaStyled>
    )
}

export default Lista;