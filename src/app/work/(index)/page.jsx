import { allCaseStudies } from 'contentlayer2/generated'
import { CaseStudies } from '@/components/work/CaseStudies'

export default function WorkPage() {
  return <CaseStudies caseStudies={allCaseStudies} />
}
