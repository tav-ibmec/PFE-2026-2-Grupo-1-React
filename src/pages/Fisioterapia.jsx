import Hero from '../components/Hero.jsx';
import { HubLayout, ApresentacaoFisioterapia } from './HUB.jsx';

function Fisioterapia() {
  return (
    <HubLayout fisioterapia>
      <main id="main-content">
        <Hero
          classe="oto-hero hub-hero fisio-hero"
          tituloId="fisio-title"
          titulo={<>EVOLUÇÃO<br /><span>LADO A LADO</span></>}
          descricao="Acompanhamento individualizado em cada etapa da sua jornada, promovendo movimento, autonomia e qualidade de vida."
          setaHref="#fisioterapia"
          setaLabel="Conheça a Fisioterapia"
        />
        <ApresentacaoFisioterapia centralizada />
      </main>
    </HubLayout>
  );
}

export default Fisioterapia;
