import Image from "next/image"
import { Card, CardContent } from "./ui/card"

const Header = () => {
    return (
        <Card>
            <CardContent className="p-5 py-8 justify-between items-center flex flex-row bg-slate-600">
                <Image src="next.svg" alt="logo" height={22} width={120}/>
                <Button></Button>
            </CardContent>
        </Card>
    )
}

export default Header 