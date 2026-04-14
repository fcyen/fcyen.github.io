import { CaseStudyHero } from '@/components/work/CaseStudyHero'
import { CaseStudyDetails } from '@/components/work/CaseStudyDetails'
import { CaseStudyGallery } from '@/components/work/CaseStudyGallery'
import { CaseStudyNavigation } from '@/components/work/CaseStudyNavigation'
import { allCaseStudies } from 'contentlayer2/generated'
import { MdxContent } from '@/components/mdx/MdxContent'
import { Footer } from '@/components/Footer'

export const generateStaticParams = async () =>
  allCaseStudies.map((caseStudy) => ({ slug: caseStudy.slug }))

export async function generateMetadata({ params }) {
  const { slug } = await params
  const caseStudy = allCaseStudies.find(
    (caseStudy) => caseStudy.slug === slug
  )
  return { title: caseStudy.title, description: caseStudy.description }
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params
  const caseStudy = allCaseStudies.find(
    (caseStudy) => caseStudy.slug === slug
  )

  return (
    <>
      <CaseStudyHero
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        tags={caseStudy.tags}
        coverImage={caseStudy.coverImage}
      />
      <CaseStudyDetails
        description={caseStudy.description}
        projectDuration={caseStudy.projectDuration}
        projectURL={caseStudy.projectURL}
      >
        <MdxContent code={caseStudy.body.code} />
      </CaseStudyDetails>
      {caseStudy.images && (<CaseStudyGallery images={caseStudy.images} />)}
      <CaseStudyNavigation caseStudySlug={caseStudy.slug} />
      <Footer newsletter={false} />
    </>
  )
}

