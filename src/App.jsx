export default function App({colors}) {
  return (
    <>
    <p>
      {colors.map((value) => (
        <p style={{color: value}}>
          {value}
        </p>
      ))
    }
    </p>
  </>
  )
  
}