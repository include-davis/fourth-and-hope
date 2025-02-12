import Home from './_components/Home/Home';
import PrimaryButton from './_components/Button/PrimaryButton';
import SecondaryButton from './_components/Button/SecondaryButton';

export default function Homepage() {
  return (
    <main>
      <PrimaryButton name="Primary Button" link="https://example.com/donate" />
      <SecondaryButton name="Secondary Button" link="https://example.com/donate" />
      <Home/>
    </main>
  );
}
