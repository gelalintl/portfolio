import Seo from "@/libs/seo";
import { Container } from "@/ui/components/container/container";
import { BasicLayout } from "@/ui/components/layouts/basicLayout";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";
import { RiAccountPinBoxLine } from "react-icons/ri";

export const generateMetadata =  () => {
  return Seo({
    title: "Sytème de design",
    description : "Présentation de tous les composants du système de design de l'application.",
  })
}

export const breadcrumb = [
  {  label: "Accueil", href : "/" },
  { label: "Design system"}
]


export default function Design() {
    return (
        <BasicLayout>
            <Container className="space-y-5">
              <div className="flex items-start gap-8">
                {/* Spinner */}
                <div className="space-y-2 border border-gray-200 px-3 py-2">
                  <Typography variant="caption2" weigth="medium">
                    Spinner
                  </Typography> 
                  <div className="flex items-center gap-5 p-10">
                    <Spinner size="small"/>
                    <Spinner/>
                    <Spinner size="large"/>
                  </div>
                </div>
    
                {/* Logo */}
                <div className="space-y-2 border border-gray-200 px-3 py-2">
                  <Typography variant="caption2" weigth="medium">
                    Logo
                  </Typography> 
                  <div className="flex items-center gap-5 py-10">
                    {/* <Logo size="very-small"/> */}
                    <Logo size="small"/>
                    <Logo/>
                    <Logo size="large"/>
                  </div>
                </div>
    
                {/* Avatar   */}
                <div className="space-y-2 border border-gray-200 px-3 py-2">
                  <Typography variant="caption2" weigth="medium">
                    Avatar
                  </Typography> 
                  <div className="flex items-center gap-5 p-10">
                    <Avatar size="small" src="/assets/images/avatar.jpg"/>
                    <Avatar src="/assets/images/bear.jpg"/>
                    <Avatar size="large" src="/assets/images/dandadan.jpg"/>
                  </div>
                </div>
              </div>
              
              {/** Buttons */}
              <div className="space-y-2 border border-gray-200 px-3 py-2">
                <Typography variant="caption2" weigth="medium">
                    Buttons
                </Typography> 
                <div className="flex items-center gap-2 px-2 py-10">
                  <Button isLoading size="small" variant="accent" icon={{icon:RiAccountPinBoxLine}}>Primary</Button>
                  <Button isLoading size="small" variant="secondary" iconPosition="left" icon={{icon:RiAccountPinBoxLine}}>Secondary</Button>
                  <Button isLoading size="small">Primary</Button>
                  <Button isLoading variant="secondary" size="small">Secondary</Button>
                  <Button isLoading variant="outline" size="small">Outline</Button>
                  <Button isLoading variant="disabled" size="small">Disabled</Button>
                  <Button isLoading variant="icon" size="small" icon={{icon:RiAccountPinBoxLine}}/>
                  <Button isLoading variant="icon" iconTheme="secondary" size="small" icon={{icon:RiAccountPinBoxLine}}/>
                  <Button isLoading variant="icon" iconTheme="gray" size="small" icon={{icon:RiAccountPinBoxLine}}/>
                </div>
                <div className="flex items-center gap-2 px-2 py-10">
                  <Button variant="accent" icon={{icon:RiAccountPinBoxLine}}>Primary</Button>
                  <Button variant="secondary" iconPosition="left" icon={{icon:RiAccountPinBoxLine}}>Secondary</Button>
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="disabled">Disabled</Button>
                  <Button variant="icon" icon={{icon:RiAccountPinBoxLine}}/>
                  <Button variant="icon" iconTheme="secondary" icon={{icon:RiAccountPinBoxLine}}/>
                  <Button variant="icon" iconTheme="gray" icon={{icon:RiAccountPinBoxLine}}/>
                </div>
                <div className="flex items-center gap-5 py-10 overflow-x-visible">
                  <Button size="large" variant="accent" icon={{icon:RiAccountPinBoxLine}}>Primary</Button>
                  <Button size="large" variant="secondary" iconPosition="left" icon={{icon:RiAccountPinBoxLine}}>Secondary</Button>
                  <Button size="large">Primary</Button>
                  <Button variant="secondary" size="large">Secondary</Button>
                  <Button variant="outline" size="large">Outline</Button>
                  <Button variant="disabled" size="large">Disabled</Button>
                  <Button variant="icon" size="large" icon={{icon:RiAccountPinBoxLine}}/>
                  <Button variant="icon" iconTheme="secondary" size="large" icon={{icon:RiAccountPinBoxLine}}/>
                  <Button variant="icon" iconTheme="gray" size="large" icon={{icon:RiAccountPinBoxLine}}/>
                </div>   
              </div>
            </Container>
        </BasicLayout>
      );
    
}