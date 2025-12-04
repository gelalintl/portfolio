import { CallToAction } from "@/ui/design-system/callToAction/callToAction"
import { CoursesView } from "./courses/courses"
import { FeaturedView } from "./featured/featured"
import { HeroTopView } from "./heroTop/heroTop"
import { HighlightsView } from "./highlights/highlights"
import SlackView from "./slack/slack"

export const LandingPageView = () => {
    return (
        <>
            <HeroTopView/>
            <FeaturedView/>
            <SlackView/>
            <CoursesView/>
            <HighlightsView/>
            <CallToAction/>
        </>
    )
  }