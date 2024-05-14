import Header from "./components/Header/Header"
import TeachingSection from "./components/TeachingSection"
import DifferencesSection from "./components/DifferencesSection"
import IntroSection from "./components/introSection"
import TabsSection from "./components/TabsSection"
import FeedbackSection from "./components/FeedbackSection"
import { useState } from "react"
import EffectSection from "./components/EffectSection"
// import { Fragment } from "react" // это встроенный компонент дает корневой элемент для разработки но без div
// или просто использовать пустой открывающий и закрытающий элемент вместо div  
export default function App() {
  const [tab, setTab] = useState('effect')
  
  return (
    <>
      <Header />
      <main> 
      <IntroSection /> 
      <TabsSection active={tab} onChange={(current) => setTab (current)}/>

      {tab === 'main' && (
        <>
        <TeachingSection />
        <DifferencesSection />
        </>
      )}

      {tab === 'feedback' && <FeedbackSection />}
      {tab === 'effect' && <EffectSection />}
      </main>
      
    </>
  )
}

