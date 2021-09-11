import Page from '../component/Page'
import React from 'react'
import useSound from 'use-sound'
import shipHorn from '../sound/ship_horn.mp3'

const Beginning = (props: any) => {
  const [play] = useSound(shipHorn);
  if (props.active) {
    play()
  }
  return (
    <Page style={{
      backgroundImage: 'url("/images/beginning.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>

    </Page>
  )
}

export default Beginning;
