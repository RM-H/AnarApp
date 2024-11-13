import {Timeline,TimelineItem,TimelineDot,TimelineConnector,TimelineContent,TimelineOppositeContent,TimelineSeparator} from '@mui/lab'
import {Check} from '@mui/icons-material'

const SidebarOrderstatus = () => {
  return(
      <>
          <Timeline position="left" >
              <TimelineItem >
                  <TimelineOppositeContent   color="text.secondary" fontSize='0.7rem' >
                      09:30
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                      <TimelineDot color='success'/>

                      <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent >ثبت </TimelineContent>
              </TimelineItem>


              <TimelineItem>
                  <TimelineOppositeContent color="text.secondary" fontSize='0.7rem'>
                      10:00
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                      <TimelineDot color='success'/>

                      <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>آماده سازی </TimelineContent>
              </TimelineItem>


              <TimelineItem>
                  <TimelineOppositeContent color="text.secondary" fontSize='0.7rem'>
                      ...
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>ارسال</TimelineContent>
              </TimelineItem>



              <TimelineItem>
                  <TimelineOppositeContent color="text.secondary" fontSize='0.7rem'>
                 ...
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                      <TimelineDot />

                  </TimelineSeparator>
                  <TimelineContent>تحویل</TimelineContent>
              </TimelineItem>
          </Timeline>




      </>
  )
}
export default SidebarOrderstatus;