import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Cabecalho from '../src/components/Cabecalho/Cabecalho'
import Lista from '../src/components/Lista/Lista'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <Box sx={{backgroundColor: 'secondary.main'}}> 
      <Lista></Lista>
    </Box>
  )
}

export default Home
