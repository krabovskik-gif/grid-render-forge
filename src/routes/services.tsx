import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/site-shell";
import { ServicesList } from "@/components/site/services";
import { TechnicalArt } from "@/components/site/technical-art";
import { GeometricField } from "@/components/site/geometric-field";

export const Route = createFileRoute("/services")({head:()=>({meta:[{title:"Послуги інженерного проєктування — ІБП"},{name:"description",content:"Газопостачання, котельні, ОВіК, інженерні мережі та інші проєктні розділи."},{property:"og:title",content:"Напрями проєктування — ІБП"},{property:"og:description",content:"Дванадцять напрямів проєктування зовнішніх і внутрішніх інженерних мереж."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Services});
function Services(){return <><PageIntro code="02" title="Напрями проєктування">Склад робіт визначаємо на основі завдання, вихідних даних, стадії проєктування та особливостей об’єкта.</PageIntro><section className="section"><div className="shell"><GeometricField variant={0} className="services-page-geometry"/><ServicesList/></div></section><section className="focus-band"><div className="shell focus-grid"><div className="focus-copy"><div className="section-code">Спеціалізація / Основний напрям</div><h2 className="mt-6">Газопостачання та котельні</h2><p>Один із ключових напрямів бюро. Рішення опрацьовуються як частина цілісної інженерної системи об’єкта.</p></div><div className="focus-visual grid-surface"><TechnicalArt variant={1} animated/></div></div></section></>}
