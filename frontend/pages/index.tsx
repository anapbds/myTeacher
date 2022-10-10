import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Professor } from '../src/@types/professor'
import Cabecalho from '../src/components/Cabecalho/Cabecalho'
import Lista from '../src/components/Lista/Lista'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "Professor 1",
      foto: "https://github.com/anapbds.png",
      descricao: "Descrição do professor 1",
      valor_hora: 100
    },
    {
      id: 2,
      nome: "Professor 2",
      foto: "https://github.com/anapbds.png",
      descricao: "Descrição do professor 2",
      valor_hora: 200
    },
    {
      id: 3,
      nome: "Professor 3",
      foto: "https://github.com/anapbds.png",
      descricao: "Descrição do professor 3",
      valor_hora: 300
    },
    {
      id: 4,
      nome: "Professor 4",
      foto: "https://github.com/anapbds.png",
      descricao: "Descrição do professor 4",
      valor_hora: 400
    }
  ]

  return (
    <Box sx={{backgroundColor: 'secondary.main'}}> 
      <Lista></Lista>
    </Box>
  )
}

export default Home
