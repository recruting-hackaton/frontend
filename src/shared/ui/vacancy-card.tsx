import { formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'

import { Badge } from '@/shared/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'

interface VacancyCardProps {
  id: number
  title: string
  description: string
  createdAt: string
}

export const VacancyCard = ({
  description,
  title,
  createdAt,
}: VacancyCardProps) => {
  return (
    <div>
      <Card
        bordered
        className="transition-all hover:bg-accent cursor-pointer overflow-hidden"
      >
        <CardHeader>
          <CardTitle className="scroll-m-20 text-xl  tracking-tight lg:text-2xl">
            {title}
          </CardTitle>
          <CardDescription>
            {formatDistanceToNow(new Date(createdAt), {
              addSuffix: true,
              locale: ru,
            })}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <article className="prose line-clamp-5">
            <ReactMarkdown>{description}</ReactMarkdown>
          </article>
        </CardContent>
        <CardFooter className="gap-2">
          <Badge variant="default">react</Badge>
          <Badge variant="default">react</Badge>
          <Badge variant="default">react</Badge>
        </CardFooter>
      </Card>
    </div>
  )
}
