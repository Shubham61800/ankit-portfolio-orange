// const overlay = document.getElementById("overlay-container");
// const openOverlay = document.getElementById("open");
// const closeOverlay = document.getElementById("close");

// openOverlay.addEventListener("click", () => {
//   overlay.classList.add("active");
// });

// closeOverlay.addEventListener("click", () => {
//   overlay.classList.remove("active");
// });

const certificates = [
  {
    title : "OffSec Certified Professional+ (OSCP+)",
    company:"OffSec"
  },
  {
    title : "Red Teaming LLM Application",
    company:"DeepLearning.AI"
  },

  {
    title: "AWS Certified Security - Spaciality",
    company: "Amazon Web Services - AWS",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C560BAQER_QnUTXrPJw/company-logo_100_100/company-logo_100_100/0/1670264051233/amazon_web_services_logo?e=1743033600&v=beta&t=2Ytz71pq6beYxJ49pHTzqLbXGzt5JhNQNEbyyACxWAQ",
    credientialUrl:
      "https://www.credly.com/badges/226f23b0-64da-46e4-92c6-007dfec7c3fb/public_url",
  },
  {
    title: "Certified Red Team Professional",
    company: "Altered Security",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D560BAQEYCd7CAPbWUg/company-logo_100_100/company-logo_100_100/0/1710419563724/alteredsecurity_logo?e=1743033600&v=beta&t=szxZ-707R8s6SlwbOynTR_bmDSbghrDcN5V1L7GoZkY",
    credientialUrl:
      "https://www.credential.net/3335e123-d456-4224-9884-dd549f25bbc0#acc.LwFxd4rz",
  },
  {
    title: "CREST CPSA",
    company: "CREST",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C4E0BAQH1moXLdCVHRQ/company-logo_100_100/company-logo_100_100/0/1651140771071/crest_approved_logo?e=1743033600&v=beta&t=s5pwtToFseelM3olm34tZR0dW24Idqi9ohA1yPH-hsk",
  },
  {
    title: "CREST Registered Penetration Tester",
    company: "CREST",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C4E0BAQH1moXLdCVHRQ/company-logo_100_100/company-logo_100_100/0/1651140771071/crest_approved_logo?e=1743033600&v=beta&t=s5pwtToFseelM3olm34tZR0dW24Idqi9ohA1yPH-hsk",
  },
  {
    title: "Certified Red Team Operator",
    company: "Zero-Point Security LTD",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C4E0BAQHAWVIxesEjfg/company-logo_100_100/company-logo_100_100/0/1648207041316/zero_point_security_ltd_logo?e=1743033600&v=beta&t=kwPJHp64ANGzYtDCyKLFQoDRj8laovN--iGfgGze3BY",
    credientialUrl:
      "https://api.eu.badgr.io/public/assertions/3sflStvnTbet8XtGeX7vdw?identity__email=ankitrakeshjoshi%40gmail.com",
  },
  {
    title: "Certified AppSec Pentester (CAPen)",
    company: "The SecOps Group",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D0BAQGJvXkjZCWEJA/company-logo_100_100/company-logo_100_100/0/1718360904522/secops_group_logo?e=1743033600&v=beta&t=tqZ031fwzMVAiypw4on41VGdIzucc3Cx6UqmqYgtLNo",
  },
  {
    title: "Certified Network Pentester",
    company: "The SecOps Group",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D0BAQGJvXkjZCWEJA/company-logo_100_100/company-logo_100_100/0/1718360904522/secops_group_logo?e=1743033600&v=beta&t=tqZ031fwzMVAiypw4on41VGdIzucc3Cx6UqmqYgtLNo",
  },
  {
    title: "Certified Network Security Practitioner(CNSP)",
    company: "The SecOps Group",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D0BAQGJvXkjZCWEJA/company-logo_100_100/company-logo_100_100/0/1718360904522/secops_group_logo?e=1743033600&v=beta&t=tqZ031fwzMVAiypw4on41VGdIzucc3Cx6UqmqYgtLNo",
  },
  {
    title: "Certified AppSec Practitioner (CAP)",
    company: "The SecOps Group",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D0BAQGJvXkjZCWEJA/company-logo_100_100/company-logo_100_100/0/1718360904522/secops_group_logo?e=1743033600&v=beta&t=tqZ031fwzMVAiypw4on41VGdIzucc3Cx6UqmqYgtLNo",
  },
  {
    title: "ISO 27001 Foundation - Information Security Certification",
    company: "TUV SUD",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D0BAQGFhpduw_DyfQ/img-crop_100/img-crop_100/0/1721631581233?e=1743033600&v=beta&t=uSNA4A53IJB8fNc1Y4rb8xE-aTHqQ7p3UvZlKRCQRE0",
  },
  {
    title: "Certified Network Security Specialist",
    company: "ICSI(International CyberSecurity Institute) UK",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D0BAQGkR1L0YT4_uw/company-logo_100_100/company-logo_100_100/0/1683642868414/icsi_international_cybersecurity_institute__logo?e=1743033600&v=beta&t=n6jysfjO8mnOXd1_ByKDz1Rr94X9sJXNr89k5KSH8Pg",
    credientialUrl: "https://www.icsi.co.uk/certificates/rxoqbzbksm",
  },
  {
    title: "Certified Penetration Testing Expert",
    company: "Pristine InfoSolutions Pvt. Ltd.",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C510BAQEVIg0H61imqg/company-logo_100_100/company-logo_100_100/0/1631391176259?e=1743033600&v=beta&t=EL2g1Z1R4tt72Sban5VnckWLxZsn67wdoNAUN-ZBCUA",
  },
  {
    title: "Certified Information Security Analyst and Ethical Hacker",
    company: "Pristine InfoSolutions Pvt. Ltd.",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C510BAQEVIg0H61imqg/company-logo_100_100/company-logo_100_100/0/1631391176259?e=1743033600&v=beta&t=EL2g1Z1R4tt72Sban5VnckWLxZsn67wdoNAUN-ZBCUA",
  },
];


const certContainer = document.getElementById("certification-grid");

certificates.forEach(cert => {
  const certDiv = document.createElement("div");
  certDiv.className="cert-item"

  const certDetails = document.createElement("div");
  certDetails.className="cert-details";

  const certName = document.createElement("h3");
  certName.innerText=cert.title

  const certCompany = document.createElement("p");
  certCompany.innerText=cert.company;

  certDetails.append(certName);
  certDetails.append(certCompany);

  certDiv.append(certDetails)
  certContainer.appendChild(certDiv);
});

const recommendations = [
  {
    commnet:
      "I had the privilege of working closely with Ankit on multiple cybersecurity projects, and his expertise in red teaming exercises is truly commendable. His deep understanding of Active Directory and Domain Controller concepts sets him apart, allowing him to identify vulnerabilities and simulate realistic attack scenarios with precision. Ankit has an exceptional ability to think like an adversary, which enhances the security posture of any organization he works with. His dedication to staying updated with the latest techniques and tools in red teaming is inspiring. I highly recommend him for any challenging role in the cybersecurity domain.",
    providedBy: "Virendra Singh Rathore",
    company: "CTO @Astra CyberTech Private Limited",
    url: "https://www.linkedin.com/in/virendrasr",
  },
  {
    commnet: `I’ve had the pleasure of collaborating with Ankit on multiple projects, and I’m delighted to recommend him. As a Senior Security Consultant, Ankit demonstrates exceptional expertise in cybersecurity. His structured approach to identifying vulnerabilities and providing actionable solutions has been instrumental to our team’s success.Ankit’s profound knowledge, paired with outstanding communication skills, ensures that even the most intricate security challenges are effectively addressed. He goes beyond the role of a consultant, serving as a true advocate for security best practices to safeguard both clients and the organization. I confidently recommend Ankit for any position requiring a committed, skilled, and highly professional security expert.`,
    providedBy: "Ashish Kukreti",
    company: "Penetration Tester Team Leader at Claranet",
    url: "https://www.linkedin.com/in/lone-ranger",
  },
  {
    commnet:
      "I had the privilege of working under Ankit's leadership, and I must emphasize his dedication to delivering high-quality results within stipulated timelines. His guidance and support have been invaluable, consistently enabling our team to meet project goals with excellence. I highly recommend Ankit as a skilled pentester with a proven track record in web, API, and mobile penetration testing. His expertise in these domains is exemplary and has consistently played a pivotal role in ensuring the security posture. Ankit's proficiency extends beyond technical assessments; he also possesses a deep understanding of risk and compliance, which adds another layer of value to his contributions. His knowledge in this area has been instrumental in aligning our projects with industry standards and regulatory requirements. He is an asset to any organization and a professional whose expertise and leadership I wholeheartedly endorse.",
    providedBy: "Shubham Ingle",
    company: "Pentester @BulletProof",
    url: "https://www.linkedin.com/in/b0rn2r00t",
  },
  {
    commnet:
      " have had the privilege of working alongside Ankit in several projects and am pleased to write this recommendation for him. As a Senior Security Consultant, Ankit’s expertise in cybersecurity is second to none. His methodical approach to identifying vulnerabilities and recommending actionable solutions has been invaluable to our team. His deep knowledge, combined with his excellent communication skills, ensures that even the most complex issues are understood and addressed effectively. Ankit is not just a consultant, but a true security advocate, always pushing for the best practices to protect both our clients and our organization. I have no reservations in recommending Ankit for any role that seeks a dedicated, knowledgeable, and professional security expert.",
    providedBy: "Manmeet Singh",
    company: "Senior Application Security Engineer",
    url: "https://www.linkedin.com/in/j0lt",
  },
  {
    commnet:
      "I had the pleasure of working alongside Ankit Joshi on several challenging red teaming and VAPT projects. Ankit's deep technical expertise and strategic mindset make him an invaluable asset to any team. His ability to identify vulnerabilities and provide effective remediation recommendations is truly impressive. Ankit's dedication to staying updated on the latest security trends and his proactive approach to security make him a standout professional in the field. As a senior, he not only excels in his own tasks but also mentors and guides junior team members, fostering a collaborative and growth-oriented environment. Ankit's commitment to enhancing the security posture of our organization has been outstanding. I highly recommend Ankit for any senior role in red teaming and VAPT; he's a true expert and an excellent colleague.",
    providedBy: "Ravi Solanki",
    company: "Senior Consultant at SecOps Group",
    url: "https://www.linkedin.com/in/ravi-solanki-876089132",
  },
];

recommendations.forEach((item) => {
  const card = document.createElement("div");
  card.className = "recom-card";

  // Add recommendation content
  const content = document.createElement("p");
  content.innerText = item.commnet;
  card.appendChild(content);

  // Create footer container
  const footer = document.createElement("div");
  footer.className = "flex-justify";

  // Add footer details
  const details = document.createElement("div");
  const name = document.createElement("p");
  name.className = "name";
  name.innerText = item.providedBy;

  const title = document.createElement("p");
  title.className = "title";
  title.innerText = item.company;

  details.appendChild(name);
  details.appendChild(title);
  footer.appendChild(details);

  // Add SVG icon
  const link = document.createElement("a");
  link.href = item.url; // Placeholder link
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "32");
  svg.setAttribute("height", "32");
  svg.setAttribute("viewBox", "0 0 25 24");
  svg.innerHTML = `
      <g clip-path="url(#clip0_144_281)">
        <path d="M22.7095 0H2.25287C1.78299 0 1.33236 0.186657 1.00011 0.518909C0.667859 0.851161 0.481201 1.30179 0.481201 1.77167V22.2283C0.481201 22.6982 0.667859 23.1488 1.00011 23.4811C1.33236 23.8133 1.78299 24 2.25287 24H22.7095C23.1794 24 23.63 23.8133 23.9623 23.4811C24.2945 23.1488 24.4812 22.6982 24.4812 22.2283V1.77167C24.4812 1.30179 24.2945 0.851161 23.9623 0.518909C23.63 0.186657 23.1794 0 22.7095 0ZM7.63453 20.445H4.0262V8.98333H7.63453V20.445ZM5.82787 7.395C5.41857 7.3927 5.01912 7.2692 4.67994 7.04009C4.34075 6.81098 4.07704 6.48653 3.92208 6.10769C3.76712 5.72885 3.72785 5.31259 3.80923 4.91145C3.89062 4.51032 4.089 4.14228 4.37936 3.85378C4.66971 3.56529 5.03902 3.36927 5.44067 3.29046C5.84232 3.21165 6.25831 3.25359 6.63615 3.41099C7.01399 3.56838 7.33674 3.83417 7.56367 4.17481C7.79059 4.51546 7.91152 4.91569 7.9112 5.325C7.91506 5.59903 7.86371 5.87104 7.76021 6.1248C7.65671 6.37857 7.50318 6.6089 7.30877 6.80207C7.11436 6.99523 6.88305 7.14728 6.62863 7.24915C6.3742 7.35102 6.10187 7.40062 5.82787 7.395ZM20.9345 20.455H17.3279V14.1933C17.3279 12.3467 16.5429 11.7767 15.5295 11.7767C14.4595 11.7767 13.4095 12.5833 13.4095 14.24V20.455H9.8012V8.99167H13.2712V10.58H13.3179C13.6662 9.875 14.8862 8.67 16.7479 8.67C18.7612 8.67 20.9362 9.865 20.9362 13.365L20.9345 20.455Z"/>
      </g>
      <defs>
        <clipPath id="clip0_144_281">
          <rect width="48" height="48" fill="white" transform="translate(0.481201)" />
        </clipPath>
      </defs>
    `;
  link.appendChild(svg);
  footer.appendChild(link);

  // Append footer to card
  card.appendChild(footer);

  // Add card to the DOM
  document.getElementById("logo-slide").appendChild(card);
});
