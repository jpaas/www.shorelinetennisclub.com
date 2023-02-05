export default function Head() {
  return (
    <>
      <title>Shoreline Tennis Club</title>
      {/* If there is a corresponding iOS app <meta content="app-id=xxx" name="apple-itunes-app" /> */}
      <meta
        content="Shoreline Tennis Club is located in Jack Darling Park in Mississauga, Ontario, Canada. We have two well maintained courts for play. Free lessons included in your membership."
        name="description"
      />
      <meta content="VJGmw6sYI3LhOkCtBN0D6EMrd9UM_j7Dxeiiq27q56w" name="google-site-verification" />
      {process.env.NEXT_PUBLIC_PROD && <meta content="noindex" name="robots" />}
      <meta content="#b5ffe1" name="theme-color" />
      <link href="/favicon.ico" rel="icon" sizes="any" />
      <link href="/favicon/favicon.svg" rel="icon" type="image/svg+xml" />
      <link href="/favicon/apple-touch-icon.png" rel="apple-touch-icon" />
      <link href="/manifest.json" rel="manifest" />
    </>
  )
}
