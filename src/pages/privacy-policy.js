import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import RenderOnSize from '../components/RenderOnSize'
import { font, palette } from '../components/common-styles'

const GreyRect = styled.div`
  background-color: ${palette('background', 'lightGray')};
  bottom: 20%;
  height: 80%;
  position: absolute;
  right: 65vw;
  width: 100vw;
  z-index: -2;
`

const MintRect = styled.div`
  background-color: ${palette('background', 'mint')};
  bottom: 200px;
  height: 100vh;
  right: -64px;
  position: absolute;
  width: 35vw;
  z-index: -2;
`

const Policy = styled.div`
  ${font('sans')};
  font-size: 14px;
  line-height: 1.4;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
`

const Section = styled.section``

const OL = styled.ol`
  padding-left: 20px;
`

export default class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <Section>
          <Policy>
            <OL>
              <li>Postanowienia ogólne</li>
              <li>Cel i zakres zbierania danych</li>
              <li>Podstawa przetwarzania danych</li>
              <li>Prawo kontroli, dostępu do treści swoich danych oraz ich poprawiania</li>
              <li>Postanowienia końcowe</li>
            </OL>
            <br />
            <OL>
              <li>POSTANOWIENIA OGÓLNE</li>
              <OL>
                <li>Administratorem danych osobowych zbieranych za pośrednictwem strony internetowej keineeile.com. jest Weronika Turczyńska wykonująca działalność gospodarczą pod firmą Werde, adres siedziby: ul. Portofino 10/60, 02-764 Warszawa, adres do doręczeń: ul. Portofino 10/60, 02-764 Warszawa, NIP: 5213538370, wpisaną do Centralnej Ewidencji i Informacji o Działalności Gospodarczej, adres poczty elektronicznej: keineeile@gmail.com, dalej „Administrator”, będąca jednoczeście Usługodawcą.</li>
                <li>Dane osobowe Usługobiorcy są przetwarzane zgodnie z ustawą o ochronie danych osobowych z dnia 29 sierpnia 1997 r. (Dz. U. Nr 133, poz. 883 ze zm.) oraz ustawą o świadczeniu usług drogą elektroniczną z dnia 18 lipca 2002 r. (Dz. U. Nr 144, poz. 1204 ze zm.).</li>
                <li>Administrator dokłada szczególnej staranności w celu ochrony interesów osób, których dane dotyczą, a w szczególności zapewnia, że zbierane przez niego dane są:</li>
                <OL>
                  <li>przetwarzane zgodnie z prawem,</li>
                  <li>zbierane dla oznaczonych, zgodnych z prawem celów i niepoddawane dalszemu przetwarzaniu niezgodnemu z tymi celami,</li>
                  <li>merytorycznie poprawne i adekwatne w stosunku do celów, w jakich są przetwarzane oraz przechowywane w postaci umożliwiającej identyfikację osób, których dotyczą, nie dłużej niż jest to niezbędne do osiągnięcia celu przetwarzania.</li>
                </OL>
              </OL>
              <li>CEL I ZAKRES ZBIERANIA DANYCH</li>
              <OL>
                <li>Dane osobowe Usługobiorców, zbierane przez Administratora, są wykorzystywane do:</li>
                <OL>
                  <li>kontaktowania się z usługobiorcą (klientem)</li>
                </OL>
                <li>Administrator przetwarza następujące dane osobowe Usługobiorców:</li>
                <OL>
                  <li>Imię i nazwisko,</li>
                  <li>Adres e-mail,</li>
                </OL>
                <li>Administrator może przetwarzać następujące dane charakteryzujące sposób korzystania przez Usługobiorcę z usług świadczonych drogą elektroniczną (dane eksploatacyjne):</li>
                <OL>
                  <li>Oznaczenia identyfikujące zakończenie sieci telekomunikacyjnej lub system teleinformatyczny, z którego korzystał Usługobiorca.</li>
                  <li>Informacje o rozpoczęciu, zakończeniu oraz zakresie każdorazowego korzystania przez Usługobiorcę z usługi świadczonej drogą elektroniczną.</li>
                  <li>Informacje o skorzystaniu przez Usługobiorcę z usług świadczonych drogą elektroniczną.</li>
                </OL>
                <li>Podanie danych osobowych, o których mowa w pkt 2 jest niezbędne do świadczenia przez Usługodawcę usług drogą elektroniczną w ramach strony internetowej.</li>
              </OL>
              <li>PODSTAWA PRZETWARZANIA DANYCH</li>
              <OL>
                <li>Korzystanie ze strony oraz zawieranie umów o świadczenie usług drogą elektroniczną za jej pośrednictwem, z czym wiąże się konieczność podania danych osobowych, jest całkowicie dobrowolne. Osoba, której dane dotyczą, samodzielnie decyduje, czy chce rozpocząć korzystanie z usług świadczonych drogą elektroniczną przez Usługodawcę zgodnie z Regulaminem.</li>
                <li>Zgodnie z art. 23 ustawy o ochronie danych osobowych z dnia 29 sierpnia 1997 r. (Dz. U. Nr 133, poz. 883 ze zm.) przetwarzanie danych jest dopuszczalne m.in. gdy:</li>
                <OL>
                  <li>osoba, której dane dotyczą, wyrazi na to zgodę, chyba że chodzi o usunięcie dotyczących jej danych.</li>
                  <li>jest to konieczne do realizacji umowy, gdy osoba, której dane dotyczą, jest jej stroną lub gdy jest to niezbędne do podjęcia działań przed zawarciem umowy na żądanie osoby, której dane dotyczą.</li>
                </OL>
                <li>Przetwarzanie danych osobowych przez Administratora odbywa się zawsze w ramach podstaw dopuszczalności ich przetwarzania wymienionych w pkt 2. Przetwarzanie danych będzie miało związek z realizacją umowy lub konieczności podjęcia działań przed zawarciem umowy na żądanie osoby, której dane dotyczą (pkt 2 lit. b).</li>
              </OL>
              <li>PRAWO KONTROLI, DOSTĘPU DO TREŚCI SWOICH DANYCH ORAZ ICH POPRAWIANIA</li>
              <OL>
                <li>Usługobiorca ma prawo dostępu do treści swoich danych osobowych oraz ich poprawiania.</li>
                <li>Każdej osobie przysługuje prawo do kontroli przetwarzania danych, które jej dotyczą, zawartych w zbiorze danych Administratora, a zwłaszcza prawo do żądania uzupełnienia, uaktualnienia, sprostowania danych osobowych, czasowego lub stałego wstrzymania ich przetwarzania lub ich usunięcia, jeżeli są one niekompletne, nieaktualne, nieprawdziwe lub zostały zebrane z naruszeniem ustawy albo są już zbędne do realizacji celu, dla którego zostały zebrane.</li>
                <li>W celu realizacji uprawnień, o któych mowa w pkt. 1 i 2 można korzystać poprzez przesłanie stosownej wiadomości e-mail na adres: keineeile@gmail.com</li>
              </OL>
              <li>POSTANIOWIENIA KOŃCOWE</li>
              <OL>
                <li>Administrator stosuje środki techniczne i organizacyjne zapewniające ochronę przetwarzanych danych osobowych odpowiednią do zagrożeń oraz kategorii danych objętych ochroną, a w szczególności zabezpiecza dane przed ich udostępnieniem osobom nieupoważnionym, zabraniem przez osobę nieuprawnioną, przetwarzaniem z naruszeniem obowiązujących przepisów oraz zmianą, utratą, uszkodzeniem lub zniszczeniem.</li>
                <li>Usługodawca udostępnia odpowiednie środki techniczne zapobiegające pozyskiwaniu i modyfikowaniu przez osoby nieuprawnione, danych osobowych przesyłanych drogą elektroniczną.</li>
              </OL>
            </OL>
          </Policy>
          <RenderOnSize size="tablet">
            <GreyRect />
          </RenderOnSize>
          <RenderOnSize size="tablet">
            <MintRect />
          </RenderOnSize>
        </Section>
      </Layout>
    )
  }
}
