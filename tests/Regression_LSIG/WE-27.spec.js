const { test, expect } = require('@playwright/test');

test('WE-27 Verify Resources Menu Link for Videos', async ({ page }) => {

  await page.goto('https://stage.lifesciences.danaher.com/');

  await page.getByRole('link', { name: 'Resources' }).click();
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.getByRole('link', { name: 'Videos' }).click();
  await expect(page.locator('#discover-life-sciences-innovations-through-video')).toContainText('Discover Life Sciences Innovations Through Video');
  await page.getByRole('heading', { name: 'The Life Sciences companies' }).click();
  await page.getByRole('heading', { name: 'The Life Sciences companies' }).click();
  await expect(page.locator('#the-life-sciences-companies-of-danaher-are-advancing-the-future-of-science-watch-how-our-technologies-are-shaping-the-next-generation-of-innovation')).toContainText('The Life Sciences companies of Danaher are advancing the future of science. Watch how our technologies are shaping the next generation of innovation.');
  await expect(page.getByRole('main')).toMatchAriaSnapshot(`
    - link "View All":
      - /url: /us/en/videos.html
    - link "Automation":
      - /url: /us/en/videos/topics/automation.html
    - link "Cell Line Development":
      - /url: /us/en/videos/topics/cell-line-development.html
    - link "Data Solutions":
      - /url: /us/en/videos/topics/data-solutions.html
    - list:
      - listitem:
        - 'link "From Imaging to Insight: Cell Cycle Mapping in Tumors with Advanced Multiplexing & Spatial Profiling Danaher Corporation From Imaging to Insight: Cell Cycle Mapping in Tumors with Advanced Multiplexing & Spatial Profiling Watch →"':
          - /url: /us/en/videos/spatial-profiling.html
          - 'img "From Imaging to Insight: Cell Cycle Mapping in Tumors with Advanced Multiplexing & Spatial Profiling"'
          - paragraph: Danaher Corporation
          - 'heading "From Imaging to Insight: Cell Cycle Mapping in Tumors with Advanced Multiplexing & Spatial Profiling" [level=3]'
          - text: ""
      - listitem:
        - link "Danaher Watch →":
          - /url: /us/en/videos/advancing-human-relevant-models.html
          - paragraph: Danaher
          - heading [level=3]
          - text: ""
      - listitem:
        - link "Characterizing Antibody-Drug Conjugates through Innovative Analytical Solutions Beckman Coulter Life Sciences Characterizing Antibody-Drug Conjugates through Innovative Analytical Solutions Watch →":
          - /url: /us/en/videos/analytical-solutions-antibody-drug-conjugates.html
          - img "Characterizing Antibody-Drug Conjugates through Innovative Analytical Solutions"
          - paragraph: Beckman Coulter Life Sciences
          - heading "Characterizing Antibody-Drug Conjugates through Innovative Analytical Solutions" [level=3]
          - text: ""
      - listitem:
        - link "A Multiplexed RF-QTOF MS & Genedata Platform for Covalent Ligand Discovery Danaher Corporation A Multiplexed RF-QTOF MS & Genedata Platform for Covalent Ligand Discovery Watch →":
          - /url: /us/en/videos/on-demand-webinar-rfqtof-ligand-screening.html
          - img "A Multiplexed RF-QTOF MS & Genedata Platform for Covalent Ligand Discovery"
          - paragraph: Danaher Corporation
          - heading "A Multiplexed RF-QTOF MS & Genedata Platform for Covalent Ligand Discovery" [level=3]
          - text: ""
      - listitem:
        - link "Danaher Corporation Watch →":
          - /url: /us/en/videos/cell-line-clone-identification-webinar.html
          - paragraph: Danaher Corporation
          - heading [level=3]
          - text: ""
    - navigation
    `);
  await page.getByRole('link', { name: 'Automation' }).click();
  await expect(page.locator('#videos')).toContainText('Videos');
  await page.getByRole('link', { name: 'View All Topics →' }).click();
  await page.getByRole('link', { name: 'Cell Line Development' }).click();
  await page.getByRole('link', { name: 'From Imaging to Insight: Cell' }).click();
  await expect(page.getByRole('main')).toMatchAriaSnapshot(`
    - paragraph:
      - img "Spatial Profiling"
    - 'heading "From Imaging to Insight: Cell Cycle Mapping in Tumors with Advanced Multiplexing & Spatial Profiling" [level=1]'
    - paragraph: Spatial profiling introduces an innovative approach to drug discovery and translational research by employing sophisticated techniques that visualize and analyze the spatial relationships within and between cells. This method provides essential insights into the biological context of interactions, such as cell-cell and protein-protein relationships, which are critical for understanding disease mechanisms and various cell states. While spatial profiling holds great promise, its success depends on selecting the right reagents and imaging technologies to generate high-quality, meaningful insights. This presentation will highlight how selecting the right tools can help researchers uncover key insights of cellular biology using a multiplexed and spatial profiling approach. You will hear about the work from Wayne Stallaert’s lab at the University of Pittsburgh, which is visualizing cell cycle plasticity to generate proteomic signatures and cell cycle maps. Wayne will present how his lab is advancing biomarker discovery through the integration of Abcam’s validated conjugated antibodies and Leica Microsystems’ imaging and sample preparation technologies. By enabling high-content, spatially resolved profiling, these tools support his team’s investigation into cell cycle dynamics and are instrumental in uncovering mechanisms of resistance to RAS/ERK and CDK inhibitors in pancreatic ductal adenocarcinoma (PDAC) and breast cancers.
    - heading "In this webinar, you will learn about:" [level=3]
    - list:
      - listitem: How Abcam’s portfolio of validated, conjugation-ready antibodies ensures unrivaled reproducibility, scalability, and ease of use for multiplex panel design.
      - listitem: How Leica Microsystems’ Cell DIVE platform is purpose-built for multiplexed spatial profiling in cell state segmentation experiments.
      - listitem: A case study presented by Wayne Stallaert, Ph.D. (University of Pittsburgh), titled “Visualizing cell cycle plasticity in human cells and tissues using highly-multiplexed single-cell imaging.
    - text: First name*
    - textbox "First_Name"
    - text: Last name*
    - textbox "Last_Name"
    - text: Email address*
    - textbox "Email_Address"
    - text: Phone number
    - textbox "Phone_Number"
    - text: Company name*
    - textbox "Company_Name"
    - text: ZIP / Postal code*
    - textbox "Postal_Code"
    - text: "Job role* Select Country* Select Additional information (please provide as many details as possible):"
    - textbox "OpCo_Comments"
    - text: Please tick below if you would like Danaher Life Sciences and the Danaher group of companies listed
    - strong:
      - link "Link Terms of Use":
        - /url: https://www.danaher.com/business-directory?utm_source=dhls_website
        - text: ""
    - text: to contact you with personalized information about goods and services, that may be of interest to you based on our analysis of your interactions with us and other information and to check to see if you’ve opened messages from us. To withdraw consent to marketing that you already receive from a Danaher group company, you should contact that company or click the unsubscribe in emails you receive. For more information please review our
    - strong:
      - link "Link Privacy Policy":
        - /url: https://lifesciences.danaher.com/us/en/legal/privacy-policy.html
        - text: ""
    - text: "Please send me communications by:"
    - checkbox "Email_Opt_In"
    - text: Email
    - checkbox "SMS_Opt_In"
    - text: SMS
    - checkbox "Phone_Opt_In"
    - text: Phone
    - checkbox "Post_Opt_In"
    - text: Direct Mail
    - button "Submit"
    `);
  await page.locator('breadcrumb').getByText('Videos').click();
  await page.getByRole('link', { name: 'View All' }).click();
});