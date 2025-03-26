import Donate from "../_components/Donate/Donate";
import impactFallbackData from '../_data/impact.json'
import donationFallbackData from '../_data/donation.json'

async function getImpact() {
  try {
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/stats?_published=true&type=impact`,
      {
        next:
        {
          tags: "cms"
        }
      }
    );
    const data = await res.json();
    if (!data.ok || data.body.length === 0) {
      throw new Error();
    }

    const parsedData = data.body.map((impactItem) => ({ icon: impactItem.icon[0].src, number: impactItem.number, description: impactItem.description }));

    return parsedData;
  } catch {
    console.log('Failed to fetch impact');
    return impactFallbackData;
  }
}


async function getDonation() {
  try {
    const res = await fetch(`${process.env.CMS_BASE_URL}/api/content/stats?_published=true&type=donation`,
      {
        next:
        {
          tags: "cms"
        }
      }
    );
    const data = await res.json();
    if (!data.ok || data.body.length === 0) {
      throw new Error();
    }

    const parsedData = data.body.map((donationItem) => ({ donation_goal: donationItem.donation_goal, donation_current: donationItem.donation_current, recommended_donation: donationItem.recommended_donation }));

    return parsedData;
  } catch {
    console.log('Failed to fetch impact numbers');
    return donationFallbackData;
  }
}

export default async function donate() {
  const impactData = await getImpact();
  const donationData = await getDonation();
  return (
    <main>
      <Donate impactData={impactData} donationData={donationData} />
    </main>
  );
}
