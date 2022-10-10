import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, Nome, Valor } from "./Lista.style"
import { Button } from "@mui/material";

const Lista = () => {
    return(
        <ListaStyled>
            <ItemLista>
                <Foto src="https://github.com/anapbds.png"/>
                <Informacoes>
                    <Nome>Ana Paula Bernardes</Nome>
                    <Valor>R$100,00 por hora</Valor>
                    <Descricao>Aulas de programação</Descricao>
                    <Button sx={{width: '70%'}}>Marcar aula com Ana</Button>
                </Informacoes>
            </ItemLista>

            <ItemLista>
                <Foto src="https://github.com/anapbds.png"/>
                <Informacoes>
                    <Nome>Ana Paula Bernardes</Nome>
                    <Valor>R$100,00 por hora</Valor>
                    <Descricao>Aulas de programação</Descricao>
                    <Button sx={{width: '70%'}}>Marcar aula com Ana</Button>
                </Informacoes>
            </ItemLista>

            <ItemLista>
                <Foto src="https://github.com/anapbds.png"/>
                <Informacoes>
                    <Nome>Ana Paula Bernardes</Nome>
                    <Valor>R$100,00 por hora</Valor>
                    <Descricao>Aulas de programação</Descricao>
                    <Button sx={{width: '70%'}}>Marcar aula com Ana</Button>
                </Informacoes>
            </ItemLista>

            <ItemLista>
                <Foto src="https://github.com/anapbds.png"/>
                <Informacoes>
                    <Nome>Ana Paula Bernardes</Nome>
                    <Valor>R$100,00 por hora</Valor>
                    <Descricao>Aulas de programação</Descricao>
                    <Button sx={{width: '70%'}}>Marcar aula com Ana</Button>
                </Informacoes>
            </ItemLista>

        </ListaStyled>
    )
}

export default Lista;