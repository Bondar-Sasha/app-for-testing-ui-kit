import { useState } from 'react'

import {
   BasicButton,
   BasicInput,
   BasicModal,
   BasicSelect,
   BasicCheckbox,
   BasicSwitch,
} from 'custom-components-lib-test-react'
import './App.css'

const options = ['first', 'second', 'third']

function App() {
   const [formState, setForm] = useState({
      checkbox: false,
      select: '',
      switch: false,
      input: '',
   })
   const [modalState, setModal] = useState(false)

   return (
      <div className="App">
         <form>
            <BasicInput
               placeholder="write"
               value={formState.input}
               onChange={e => {
                  setForm(prev => ({ ...prev, input: e.target.value }))
               }}
            />

            <div className="BasicSwitch">
               <BasicSwitch
                  checked={formState.switch}
                  onChange={e => {
                     setForm(prev => ({ ...prev, switch: e.target.checked }))
                  }}
               />
            </div>
            <div className="BasicCheckbox">
               <BasicCheckbox
                  checked={formState.checkbox}
                  onChange={e => {
                     setForm(prev => ({ ...prev, checkbox: e.target.checked }))
                  }}
               />
            </div>
            <BasicSelect
               options={options}
               currentValue={formState.select}
               onChange={str => {
                  setForm(prev => ({ ...prev, select: str }))
               }}
            />
            <BasicButton
               type="button"
               onClick={() => {
                  setModal(true)
               }}
               variant="outlined"
            >
               Open Modal
            </BasicButton>
         </form>
         <BasicModal open={modalState} onClose={() => setModal(false)}>
            {JSON.stringify(formState)}
         </BasicModal>
      </div>
   )
}

export default App
