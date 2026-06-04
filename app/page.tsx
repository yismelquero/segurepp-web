import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { KPIBar } from '@/components/home/KPIBar'
import { SolutionsGrid } from '@/components/home/SolutionsGrid'
import { ClientsSection } from '@/components/home/ClientsSection'
import { FinalCTA } from '@/components/home/FinalCTA'
import { getClientesActivos } from '@/data/clientes'

export const metadata: Metadata = {
  title: 'SEGUREPP — Equipos Médicos, Seguridad Industrial y Uniformes en Bolivia',
  description:
    'Proveedor boliviano de equipos médicos, seguridad industrial y uniformes corporativos. Más de 200 empresas en Bolivia confían en SEGUREPP. Solicite cotización.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'SEGUREPP — Equipos Médicos, Seguridad Industrial y Uniformes en Bolivia',
    description:
      'Proveedor boliviano de equipos médicos, seguridad industrial y uniformes corporativos. Más de 200 empresas en Bolivia confían en SEGUREPP.',
    url: '/',
  },
}

export default function HomePage() {
  const clientes = getClientesActivos()

  return (
    <>
      <Hero />
      <KPIBar />
      <SolutionsGrid />
      <ClientsSection clientes={clientes} />
      <FinalCTA />
    </>
  )
}
