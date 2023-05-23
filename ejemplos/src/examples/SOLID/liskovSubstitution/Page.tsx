import {
  AlertLabel,
  ErrorLabel,
  Label,
  SuccessLabel
} from './components/Label/Label'

export const LiskovSubstitutionPage = () => {
  return (
    <main style={{ maxWidth: '960px', marginInline: 'auto', padding: '30px' }}>
      <h1>Liskov substitution</h1>
      <div>
        <Label>Default Label</Label>
      </div>
      <div>
        <SuccessLabel>Success Label</SuccessLabel>
      </div>
      <div>
        <AlertLabel>Alert Label</AlertLabel>
      </div>
      <div>
        <ErrorLabel>Error Label</ErrorLabel>
      </div>
    </main>
  )
}
