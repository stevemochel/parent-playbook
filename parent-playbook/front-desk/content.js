// FGL Front Desk Hub — unified content model (Playbook v3 + Front Desk Bible v3 + Ops Calendar v2)
export const sections = [
  { letter: "A", name: "New Inquiries", desc: "Programs, pricing, permits, international" },
  { letter: "B", name: "Enrollment", desc: "New student setup, QC, Mailchimp" },
  { letter: "C", name: "Driving Lessons", desc: "Schedule, cancel, fees, no permit" },
  { letter: "D", name: "Online Classes", desc: "Scheduling, lockouts, attendance" },
  { letter: "E", name: "Road Tests", desc: "Booking, eDECs, test day" },
  { letter: "F", name: "Docs & Payments", desc: "Insurance letters, refunds, balances" },
  { letter: "G", name: "Escalations", desc: "Upset parents, no-shows, weather, complaints" }
];

export const plays = [
{ id:"A1", section:"A", title:"Parent calls asking about programs for their teen", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Ask: 'How old is your student?'", sub:"This determines the program path" },
    { n:2, text:"Confirm 30-Hour Course (most teens 16–17) or check 8-Hour eligibility", sub:"See Play A5 if student is 18 and has graduated high school" },
    { n:3, text:"Walk through the program: 15 classes, Parent/Teen Class, 4 driving lessons, 40 practice hours", sub:"Emphasize: Class 1 (Parent/Teen Class) should be taken first" },
    { n:4, text:"Explain the permit hold: 121 days for 30-Hour, 181 days for 8-Hour" },
    { n:5, text:"Mention the Permit Kit ($35) if they don't have their permit yet" },
    { n:6, text:"Offer to enroll now or direct to the website" }]},
  { title:"What to say", say:"For a 16 or 17-year-old, the most common path is our 30-Hour Course — 15 online classes, 4 driving lessons with a certified FGL instructor, and a mandatory Parent/Teen Class we ask at least one parent to attend. After completing the program and holding the permit for about 4 months, they're eligible for the road test. Would you like to get started?" },
  { title:"In DSS", rows:[
    { n:1, text:"Look up available class dates if they want to enroll" },
    { n:2, text:"Create enrollment record if they're ready to sign up", sub:"See Play B1 for full enrollment procedure" }]}],
  footer:"Pricing questions → Play A3. Student is 18 and graduated → Play A5. $999 vs $975 → Play A8.", related:["A3","A5","A8","B1"] },
{ id:"A2", section:"A", title:"Adult (18+) calls asking about getting their license", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Confirm they are 18 or older" },
    { n:2, text:"Explain the 8-Hour Safe Driving Practices Course", sub:"One full day, 9am–5:30pm, Darien, twice monthly on Saturday or Sunday" },
    { n:3, text:"Mention the 91-day permit hold requirement" },
    { n:4, text:"Explain driving lessons are not required by the DMV but strongly recommended" },
    { n:5, text:"Note: to take the road test at FGL, they need at least 1 lesson (2 hours) with us", sub:"DMV requirement" },
    { n:6, text:"Offer to enroll or answer follow-up questions" }]},
  { title:"What to say", say:"For adults 18 and over, you'll need to complete our 8-Hour Safe Driving Practices Course — it runs 9am to 5:30pm on a Saturday or Sunday at our Darien location, and we offer it twice a month. After holding your permit for about 3 months, you're eligible for your road test. Would you like to sign up?" },
  { title:"In DSS", rows:[
    { n:1, text:"Check next available adult 8-Hour class date" },
    { n:2, text:"Create enrollment record if ready — see Play B1" }]}],
  footer:"If they say they already have driving experience: the 8-Hour Course is still required — it's a CT state requirement.", related:["B1","A9"] },
{ id:"A3", section:"A", title:"Caller asks about pricing", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Ask the student's age to confirm the right program" },
    { n:2, text:"Quote the correct price from the pricing table", sub:"See the Pricing page — know these cold" },
    { n:3, text:"Mention the Permit Kit ($35) as an add-on at enrollment" },
    { n:4, text:"If they ask about the difference between $999 and $975: go to Play A8" },
    { n:5, text:"Offer to enroll them now" }]}],
  footer:"FGL does not have a formal discount program. If asked: 'We don't have a formal discount program.' Payment plans are available by request — approved by Anisia or Steve.", related:["A8","B1"] },
{ id:"A4", section:"A", title:"Caller asks about getting a learner's permit", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Explain the CT DMV permit process — FGL does not administer permit tests" },
    { n:2, text:"Direct them to ct.gov/dmv for test scheduling" },
    { n:3, text:"Mention the Work Zone Safety Online Module", sub:"Required, free, on the DMV website" },
    { n:4, text:"Mention the Permit Kit ($35) we sell to help them prepare for the written test" },
    { n:5, text:"They can enroll at FGL before or after getting their permit", sub:"But lessons can't be scheduled until the permit is on file" }]},
  { title:"What to say", say:"Getting your permit is done through the CT DMV directly — we don't administer the test. You'll need to pass a vision test, a written knowledge test, and complete a free online module called the Work Zone Safety course on the DMV website. We do sell a Permit Kit for $35 that includes the DMV manual and extended practice tests — a lot of students find it really helpful." }] },
{ id:"A5", section:"A", title:"18-year-old asks about the teen 8-hour class", warn:"One of the most common mistakes. An 18-year-old who has graduated high school CANNOT enroll in the teen program. Always confirm graduation status.", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Ask: 'Is the student currently enrolled in high school, or have they graduated?'", sub:"This is the key question" },
    { n:2, text:"If still in high school: eligible for the teen 8-Hour Course", sub:"Normal teen path applies" },
    { n:3, text:"If graduated: must take the Adult 8-Hour Course — not the teen program", sub:"Direct to Play A2" },
    { n:4, text:"Explain the adult path: one-day class at Darien, 9am–5:30pm, offered twice monthly" }]},
  { title:"What to say", say:"Great question — for 18-year-olds it depends on whether they've graduated high school yet. If they're still enrolled in high school, they can take our teen program. If they've already graduated, they'll need our Adult 8-Hour Course instead — it's a one-day class at our Darien location. This is especially important for students heading to college in the fall." }],
  footer:"Comes up most often in summer before college. Make the question a habit any time an 18-year-old asks about the teen program.", related:["A2"] },
{ id:"A6", section:"A", title:"Caller asks what a valid permit printout looks like", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Explain the three acceptable forms of permit" },
    { n:2, text:"Emphasize the QR code requirement for temporary printouts" },
    { n:3, text:"Be clear: photos on phones are never acceptable" }]},
  { title:"What to say", say:"The physical DMV card is always fine. If the student has a temporary permit printout from the DMV website, it's acceptable as long as it includes the QR code — that's on the third page of the printout. A photo of the permit on a phone is never accepted. If the student shows up without a valid permit, the lesson will be cancelled and a $50 fee applies." },
  { title:"Acceptable permits", rows:[
    { n:1, text:"Physical DMV permit card", sub:"Always acceptable", tag:"✓ Accept" },
    { n:2, text:"Temporary permit printout WITH QR code on page 3", sub:"All pages must be present", tag:"✓ Accept" },
    { n:3, text:"Photo on phone", sub:"Never acceptable — DMV regulation", tag:"✗ Decline" },
    { n:4, text:"Printout missing page 3 or QR code", sub:"Not valid", tag:"✗ Decline" }]}],
  related:["C4"] },
{ id:"A7", section:"A", title:"Parent asks about class order — does Class 1 have to be first?", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Confirm: Class 1 (Parent/Teen Class) should always be taken first" },
    { n:2, text:"Explain that the first four classes are sequential and build on each other" },
    { n:3, text:"Flexibility exists after Class 4, but Class 1 before driving lessons is strongly recommended" },
    { n:4, text:"The Parent/Teen Class only runs 2–3 times per month — book it early" }]},
  { title:"What to say", say:"We strongly recommend taking Class 1 — that's the Parent/Teen Class — first, ideally before any driving lessons begin. It's packed with important information for both parents and students. The first four classes are also designed to build on each other, so we recommend taking them in sequence. Just a heads up: the Parent/Teen Class only runs two or three times a month, so it's worth booking early." }],
  footer:"Class 1 is the only class the DMV requires a parent to attend. After Class 4 there is more flexibility — but Class 1 first is non-negotiable as FGL's recommendation." },
{ id:"A8", section:"A", title:"$999 vs $975 — explaining the difference", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Acknowledge the question — this is a smart one to ask" },
    { n:2, text:"Both programs include the same 8 hours of driving lessons", sub:"The driving lessons are where most of the cost is" },
    { n:3, text:"Classroom cost is lower because classes are taught in groups of up to 40", sub:"Adding 11 more classes only adds $24" },
    { n:4, text:"Walk through the three key differences: test eligibility timeline, insurance discount, home study responsibility" },
    { n:5, text:"Name the one use case where the 8-Hour Course makes sense: boarding school students" }]},
  { title:"What to say — the confirmed script", say:"Both programs include the same 8 hours of one-on-one driving lessons — that's where most of the cost is, since it's a dedicated instructor and car for just your student. The difference is in the classroom: 15 Zoom classes vs. 4. Because our classes are taught to groups of up to 40 students at a time, adding those 11 extra classes only adds $24 to the price. For that $24, your student can test two months sooner, and the 30-Hour Course typically qualifies for an insurance discount that saves most families far more than $24 in the first month. The 8-Hour Course also requires 22 hours of additional home study that falls on you as the parent to deliver — with the 30-Hour Course, we handle all of that. The 8-Hour Course works well for students at boarding school who can't make regular classes. For most families, the 30-Hour Course is the better value by a wide margin." }] },
{ id:"A9", section:"A", title:"Au pair, expat, or international driver calls about lessons", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Ask: 'Do you have a valid CT learner's permit, or are you driving on a foreign license?'", sub:"This determines the path" },
    { n:2, text:"If CT permit: standard program applies — proceed as normal" },
    { n:3, text:"If foreign license: verify they qualify under the international license rules below" },
    { n:4, text:"If they just want extra lessons (not getting a CT license): confirm license, recommend the 2-lesson adult package at $398" },
    { n:5, text:"Lessons can focus on skill building and their regular driving routes" }]},
  { title:"International license rules", rows:[
    { n:1, text:"Valid CT Learner's Permit", sub:"Standard path — no special requirements", tag:"✓" },
    { n:2, text:"Valid International License (translated into English) + home country license", sub:"Both documents must be shown to the instructor before the lesson", tag:"✓" },
    { n:3, text:"Visitor's visa, valid foreign license + IDP", sub:"May drive up to 1 year. IDP must be obtained in home country before traveling.", tag:"✓" }]},
  { title:"What to say", say:"As long as you have a valid driver's license that qualifies — either a CT permit or your international license with your home country license — we can absolutely do driving lessons. We don't need you to be working toward a CT license. Our Adult 2-Lesson Package is $398 for 4 hours, and we can tailor the lessons to the skills and routes you use most. Does that sound like what you're looking for?" }],
  footer:"Both documents must be physically present at the lesson — international license translated into English AND home country license. Remind the student before lesson day." },
{ id:"B1", section:"B", title:"Enrolling a new student by phone", blocks:[
  { title:"What you need", rows:[
    { n:1, text:"Student's full name — must match DMV records exactly", sub:"First, middle (if used), last" },
    { n:2, text:"Student's date of birth" },
    { n:3, text:"Parent/guardian name, email, and phone — teens only" },
    { n:4, text:"Student email address" },
    { n:5, text:"Home address and hometown" },
    { n:6, text:"Learner's permit number, issue date, and expiration date", sub:"Lessons cannot be scheduled without this" },
    { n:7, text:"Preferred FGL location" },
    { n:8, text:"How they heard about FGL" },
    { n:9, text:"Whether they want to add the Permit Kit ($35)" }]},
  { title:"Steps", rows:[
    { n:1, text:"Collect all required information above" },
    { n:2, text:"Enter student record in DSS with all fields complete" },
    { n:3, text:"Enroll student in the correct program and class rotation" },
    { n:4, text:"Process Permit Kit purchase if requested" },
    { n:5, text:"Confirm student will receive Online Student Center login by email" },
    { n:6, text:"Add student to Mailchimp with correct location tag — see Play B3" },
    { n:7, text:"Remind them: lessons cannot be scheduled until their permit is on file" }]},
  { title:"What to say", say:"I've got everything set up. You'll receive an email shortly with your login for our Online Student Center — that's where you'll book your driving lessons and track your progress. Just a reminder: we'll need the learner's permit number on file before we can schedule any driving lessons." }],
  footer:"No permit number yet? Create the record, note 'permit pending,' and flag for follow-up. Do not schedule lessons until the permit is on file.", related:["B3","C1"] },
{ id:"B2", section:"B", title:"Daily enrollment QC check", blocks:[
  { title:"Verify each new enrollment", rows:[
    { n:1, text:"Open DSS and filter for enrollments from the past 24 hours" },
    { n:2, text:"Verify student's full name matches DMV format exactly" },
    { n:3, text:"Confirm date of birth is present" },
    { n:4, text:"Confirm home address and hometown are complete" },
    { n:5, text:"Confirm correct FGL location is selected" },
    { n:6, text:"Confirm learner's permit number is on file" },
    { n:7, text:"Confirm permit issue date and expiration date are present" },
    { n:8, text:"Confirm Permit Kit purchase is recorded if applicable" },
    { n:9, text:"Confirm parent/guardian name, email, phone are complete — teens only" },
    { n:10, text:"Confirm correct program is selected", sub:"30-Hour, 8-Hour Teen, Adult 8-Hour, or Lessons Only" },
    { n:11, text:"Call or email parent/student to correct any discrepancy — do not guess" },
    { n:12, text:"Note any correction in the student's DSS record: what was changed and the date" },
    { n:13, text:"Flag unresolvable discrepancies to Anisia before end of day" }]}],
  footer:"Owner: Priscila. Backup: Ivey → Anisia. Maritza is being trained on this process." },
{ id:"B3", section:"B", title:"Adding a new student to Mailchimp", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Log in to Mailchimp and navigate to the FGL Contacts list" },
    { n:2, text:"Add new contact: first name, last name, student email, enrollment date" },
    { n:3, text:"Apply the correct location tag matching the student's preferred FGL location", sub:"Tags are location-based only: Greenwich, Darien, Fairfield, Westport, or Wilton" },
    { n:4, text:"Verify the contact and tag are correct before saving" }]}],
  footer:"Tags are location-based ONLY — not program-based. Do not apply program tags. Owner: Priscila." },
{ id:"C1", section:"C", title:"Student or parent wants to schedule a driving lesson", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Confirm permit is on file in DSS before doing anything else", sub:"Cannot schedule without a permit on file" },
    { n:2, text:"Check available lesson slots in DSS for their preferred location" },
    { n:3, text:"Book the lesson and confirm the date, time, and instructor" },
    { n:4, text:"Remind them: physical permit must be brought to every lesson" },
    { n:5, text:"Remind them: cancellations must be made through the Online Student Center with 24+ hours notice" }]},
  { title:"What to say", say:"Let me take a look at what's available at [location]. We have openings on [dates]. Does any of that work? Just a reminder — make sure to bring your physical permit to the lesson. We can't start without it." },
  { title:"In DSS", rows:[
    { n:1, text:"Book lesson: confirm instructor, vehicle, time, location" },
    { n:2, text:"Verify permit number is in the student record" }]}],
  footer:"Summer and school breaks book months out. Encourage early scheduling for prime times." },
{ id:"C2", section:"C", title:"Student or parent wants to reschedule a lesson", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Check the lesson date in DSS" },
    { n:2, text:"If more than 24 hours away: reschedule at no charge" },
    { n:3, text:"If less than 24 hours away: inform them of the $50 late cancellation fee BEFORE rescheduling" },
    { n:4, text:"Find a new available slot and confirm with the caller" },
    { n:5, text:"Update DSS with the new lesson date" }]},
  { title:"What to say", say:"I can help you reschedule. Since we have [more than / less than] 24 hours before the lesson, [there's no charge / there will be a $50 late cancellation fee]. Let me find you a new time — does [date/time] work?" },
  { title:"In DSS", rows:[
    { n:1, text:"Cancel original lesson" },
    { n:2, text:"Book new lesson" },
    { n:3, text:"Apply $50 fee if less than 24 hours notice" }]}],
  related:["C5"] },
{ id:"C3", section:"C", title:"Student or parent wants to cancel a lesson", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Check the lesson date in DSS" },
    { n:2, text:"If more than 24 hours away: cancel at no charge" },
    { n:3, text:"If less than 24 hours away: apply $50 late cancellation fee" },
    { n:4, text:"Cancel the lesson in DSS" },
    { n:5, text:"Offer to rebook a new lesson while you have them on the phone" }]},
  { title:"What to say", say:"I can cancel that for you. Since we have [more than / less than] 24 hours before the lesson, [there's no charge / there will be a $50 late cancellation fee applied]. Would you like to rebook a new lesson while we're on the phone?" }],
  footer:"Email and voicemail do NOT cancel a lesson. If a parent says they 'left a voicemail,' the fee still applies. The only valid cancellation method is the Online Student Center or calling during business hours.", related:["C5"] },
{ id:"C4", section:"C", title:"Student arrives without their physical permit", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Apologize and explain the DMV requirement" },
    { n:2, text:"Cancel the lesson in DSS" },
    { n:3, text:"Apply the $50 no-show fee" },
    { n:4, text:"Offer to rebook immediately" },
    { n:5, text:"Note the incident in the student record in DSS" }]},
  { title:"What to say", say:"I'm sorry — the DMV requires us to verify the physical permit before every lesson, and photos or copies aren't accepted. We'll need to cancel today's lesson and reschedule. There will be a $50 fee. Let's get you a new time right now — and for next time, keep the permit somewhere you always grab it before leaving the house." },
  { title:"In DSS", rows:[
    { n:1, text:"Cancel lesson" },
    { n:2, text:"Apply $50 no-show fee" },
    { n:3, text:"Note 'no permit' in student record" },
    { n:4, text:"Book new lesson if they want to reschedule" }]}],
  related:["A6"] },
{ id:"C5", section:"C", title:"Parent disputes a late cancellation or no-show fee", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Listen fully before responding" },
    { n:2, text:"Acknowledge their frustration" },
    { n:3, text:"Explain the policy clearly and why it exists" },
    { n:4, text:"Hold the policy — do not waive without authorization from Anisia" },
    { n:5, text:"Offer to rebook a new lesson while on the call" },
    { n:6, text:"If they escalate: email Anisia with full context" }]},
  { title:"What to say", say:"I completely understand your frustration, and I'm sorry this created an inconvenience. The 24-hour policy is in place because when a lesson is cancelled last-minute, that time slot can't be filled by another student — the instructor's time is reserved. I'm not able to waive the fee, but I'd be happy to help get you rescheduled right now so we can get your student back on track." }],
  footer:"Do not waive fees without Anisia's authorization. If they demand a manager, email Anisia with the full situation.", related:["G1"] },
{ id:"D1", section:"D", title:"Student wants to schedule or reschedule an online class", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Check available sessions for that class number in DSS" },
    { n:2, text:"Book or reschedule through DSS" },
    { n:3, text:"Remind them: own Zoom account registered under their exact name", sub:"Never a parent's account" },
    { n:4, text:"Remind them: camera must be on the entire class", sub:"DMV regulation" },
    { n:5, text:"Remind them: cannot enter more than 10 minutes after class starts", sub:"No exceptions — must rebook if late" },
    { n:6, text:"Remind them: end-of-class quiz must be submitted for credit" }]},
  { title:"What to say", say:"I can help with that. We have [Class #] available on [dates]. Quick reminder — you'll need your own Zoom account with your name exactly as registered with us, camera on the whole time, and don't forget the quiz at the end for your credit." }],
  footer:"Do not exceed 40 students per session — DMV regulation. If the class is full, direct to the next available session of the same class number." },
{ id:"D2", section:"D", title:"Student was locked out of class for being late", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Confirm they were more than 10 minutes late — policy applies" },
    { n:2, text:"Apologize and explain the DMV regulation — no exceptions" },
    { n:3, text:"Help them reschedule the same class number" },
    { n:4, text:"Advise them to sign on a few minutes early next time" }]},
  { title:"What to say", say:"I'm sorry about that — per DMV regulations, we can't admit students more than 10 minutes after class begins. Let me help you reschedule right now. I'd suggest signing on a few minutes early next time just to be safe." },
  { title:"In DSS", rows:[
    { n:1, text:"Reschedule the same class number" },
    { n:2, text:"Note missed class in student record" }]}],
  footer:"If they claim they were on time: check Zoom attendance records. Do not reverse a missed class mark without Anisia's approval.", related:["D3"] },
{ id:"D3", section:"D", title:"Student disputes attendance — says they attended but have no credit", warn:"The 110-Minute Rule: a student must have attended 110 minutes or more to receive credit. Under 110 minutes = no credit, must rebook. No exceptions.", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Get the class date and class number from the student" },
    { n:2, text:"Go to Google Drive → Attendance folder → locate the file for that class date and number" },
    { n:3, text:"Find the student in the attendance list and check their total time" },
    { n:4, text:"If 110+ minutes: mark them present in DSS (see procedure below)" },
    { n:5, text:"If under 110 minutes: inform the student and direct them to book a makeup class" },
    { n:6, text:"Secondary check: review the OnlineClasses email inbox to confirm a photo of the student was captured" }]},
  { title:"What to say", say:"Let me look into that for you. I'm pulling up the attendance records now. [After checking:] I can see you attended for [X minutes]. [If 110+: 'I'm going to get that credit added for you right now.' / If under: 'Unfortunately the records show less than the required 2 hours, so we'll need to get you rebooked. Let me find a time that works.']" },
  { title:"To manually mark present in DSS", rows:[
    { n:1, text:"DSS → Classroom → Class List" },
    { n:2, text:"Use Refine Search — check 'Completed' box to see past classes" },
    { n:3, text:"Find the correct rotation and session number" },
    { n:4, text:"Click the Attendance button for that session" },
    { n:5, text:"Scroll to the student's name — click Present — click SAVE", sub:"Both steps required" }]}] },
{ id:"E1", section:"E", title:"Student wants to schedule a road test at FGL", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Verify permit hold period is met", sub:"121 days (30-Hr teen), 181 days (8-Hr teen), 91 days (adult)" },
    { n:2, text:"Verify all classes are complete" },
    { n:3, text:"Verify all driving lessons are complete" },
    { n:4, text:"Verify all requirements were completed at least 2 weeks before the test date", sub:"Non-negotiable" },
    { n:5, text:"Check available road test dates in DSS" },
    { n:6, text:"Book the road test" },
    { n:7, text:"Remind them: physical permit required on test day, plan to arrive early" }]},
  { title:"What to say", say:"Let me check your eligibility and see what dates we have. [After verifying:] Great — you're all set. I have [date] available at [location]. You'll need to bring your physical permit on test day and plan to arrive a bit early to check in." }],
  footer:"Requirements not met? Do not book the test. Explain exactly what's still needed and when they'll be eligible." },
{ id:"E2", section:"E", title:"Road tests at FGL are fully booked", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Let them know current availability" },
    { n:2, text:"Suggest checking back regularly for cancellations" },
    { n:3, text:"Offer DMV testing as an alternative" },
    { n:4, text:"Explain the eDEC request process if they go the DMV route" }]},
  { title:"What to say", say:"Our road tests book up quickly — especially during school breaks and summer. Tests are limited to 15–22 students per session. I'd recommend checking back for cancellations. You can also schedule directly with the CT DMV — you'd need to request your eDEC from us first. Would you like me to explain how that works?" }],
  related:["E4"] },
{ id:"E3", section:"E", title:"Student wants to cancel or reschedule their road test", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Check the road test date in DSS" },
    { n:2, text:"If more than 1 week away: cancel or reschedule at no charge" },
    { n:3, text:"If within 1 week: advise them the test fee will be forfeited BEFORE proceeding" },
    { n:4, text:"Update DSS accordingly" },
    { n:5, text:"Cancellation due to illness: student must submit a doctor's note to waive the fee" }]},
  { title:"What to say", say:"I can help with that. Since your test is [more than a week / less than a week] away, [there's no fee / the test fee will be forfeited — I want to make sure you know that before we proceed]. Would you like to go ahead?" }] },
{ id:"E4", section:"E", title:"Student requests their eDEC (for DMV road test)", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Verify in DSS that all classes and lessons are complete", sub:"eDEC cannot be issued until all requirements are met" },
    { n:2, text:"Direct student to submit the eDEC request form on the FGL website", sub:"freshgreenlight.typeform.com/to/tDSBzzBJ" },
    { n:3, text:"Remind them to submit at least 1 week before their DMV test date" },
    { n:4, text:"After-hours requests are processed the next business day" }]},
  { title:"What to say", say:"To get your eDEC, submit a request through the form on our website. Make sure to do it at least a week before your DMV test date — after-hours requests get processed the next business day. Once we send it, you'll use it to book your test with the DMV." }],
  footer:"Requirements not complete? Do not process an eDEC — advise what's still needed. Responses go to roadtests@freshgreenlight.com for the Road Test Coordinator to action." },
{ id:"E5", section:"E", title:"Road test day — front desk procedure", warn:"The Road Test Coordinator owns the full test day procedure. Front desk staff assist with student arrival and questions that come in while the test is running.", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Student arrives asking where to go: direct them to the Road Test Coordinator", sub:"The coordinator is handling check-in — don't pull students away from that process" },
    { n:2, text:"Parent calls about a student who already tested: direct to roadtests@freshgreenlight.com" },
    { n:3, text:"Student needs to cancel a road test on test day: do NOT process it yourself", sub:"Direct to roadtests@freshgreenlight.com or 475.221.2475 immediately. Illness cancellations require a doctor's note to waive the fee." },
    { n:4, text:"Student passed and asks what's next: the coordinator will email tomorrow with permanent license instructions", sub:"Remind them: keep the pink slip with their permit — the pink slip alone is NOT a valid driver's license" },
    { n:5, text:"All other road test questions on test day: roadtests@freshgreenlight.com or 475.221.2475" }]}] },
{ id:"F1", section:"F", title:"Parent or insurance company requests an insurance letter", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Ask: 'Is the insurance company requesting a specific form, or just proof of completion?'", sub:"If specific form: escalate to Daphney" },
    { n:2, text:"Verify the student completed their program in DSS" },
    { n:3, text:"Open the insurance letter template in Google Drive", sub:"Shared Drives → FGL Front Desk → Cos Cob Front Desk Files → CT Student Insurance Letter" },
    { n:4, text:"Fill in: student full name, date of birth, program name, completion date, FGL license number" },
    { n:5, text:"Email as a PDF — or mail if physical copy required" },
    { n:6, text:"Note the request in the student's DSS record with date" }]},
  { title:"What to say", say:"Of course — let me verify that in our system. [After checking:] Great, I can have that letter emailed to you right away. Can I confirm the email address?" }] },
{ id:"F2", section:"F", title:"Student or parent requests a refund", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Listen to the request fully before responding" },
    { n:2, text:"Look up the student in DSS to see what has and hasn't been used" },
    { n:3, text:"Document the request in DSS: student name, date, reason, services used vs. unused" },
    { n:4, text:"Do NOT quote a refund amount — escalate to Anisia or Steve" },
    { n:5, text:"Let them know someone will follow up with them" }]},
  { title:"What to say", say:"I completely understand. Let me pull up your account and note all the details. Refunds are handled by our management team — they'll be in touch with you [today / by tomorrow]. Can I confirm the best way to reach you?" }],
  footer:"Do not approve, deny, or quote any refund amount on the call. All refunds require Anisia or Steve's approval. A $50 admin fee applies to voluntary withdrawals." },
{ id:"F3", section:"F", title:"Student or parent asks about their balance", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Look up the student in DSS" },
    { n:2, text:"Confirm the outstanding balance" },
    { n:3, text:"Direct them to the Online Student Center to pay, or offer to take payment by phone" },
    { n:4, text:"If paying by phone: record in DSS" }]},
  { title:"What to say", say:"Let me pull up your account. [After checking:] You have a balance of $[AMOUNT]. You can pay through the Online Student Center at any time, or I can take payment over the phone right now if that's easier." }],
  footer:"If they dispute the balance: do not adjust it yourself. Document the dispute and escalate to Anisia or Steve via email." },
{ id:"G1", section:"G", title:"Parent is upset and escalating", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Stop talking — let them finish completely before responding" },
    { n:2, text:"Acknowledge their feelings without agreeing or disagreeing with their position" },
    { n:3, text:"Clarify the issue: 'Just to make sure I understand...'" },
    { n:4, text:"Offer what you can within your authority" },
    { n:5, text:"If you cannot resolve it: offer to connect them with Anisia — email Anisia with full context" },
    { n:6, text:"Never argue, never match their tone" }]},
  { title:"What to say", say:"I completely understand your frustration, and I'm sorry this has been such a difficult experience. Just to make sure I understand correctly — [restate what they said]. What I can do right now is [offer]. If you'd like to connect with Anisia, our General Manager, I'm happy to reach out to her on your behalf." },
  { title:"In DSS", rows:[
    { n:1, text:"Document the complaint: student name, date, summary of concern, what was offered" },
    { n:2, text:"Email Anisia with full context — include what was said and what was offered" }]}],
  footer:"If they become abusive: 'I want to help resolve this, but I need us to have a calm conversation. I'm going to have Anisia reach out to you directly.' You do not have to accept abusive behavior." },
{ id:"G2", section:"G", title:"Instructor no-show or unable to make a lesson", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Text Anisia immediately with the instructor name, lesson time, and location" },
    { n:2, text:"Anisia determines if a replacement instructor is available" },
    { n:3, text:"If replacement available: update DSS with new instructor assignment" },
    { n:4, text:"If no replacement: contact the student/parent to reschedule — no fee applies" },
    { n:5, text:"Note in DSS" }]},
  { title:"What to say", say:"I'm so sorry — we've had an unexpected situation with your instructor today. We want to make sure you get your full lesson, so we'd like to reschedule you at no charge. [Offer dates.] I sincerely apologize for the inconvenience." }],
  footer:"No cancellation fee ever applies when FGL cancels or changes a lesson. If Anisia is not available: text Daphney. Do not leave a student waiting without communication." },
{ id:"G3", section:"G", title:"Caller asks about weather or snow day cancellations", blocks:[
  { title:"Steps", rows:[
    { n:1, text:"Do NOT proactively tell students lessons are cancelled until Anisia or Daphney has confirmed", sub:"Always check first" },
    { n:2, text:"Check with Anisia or Daphney for the current cancellation decision" },
    { n:3, text:"Let the caller know the confirmed status" },
    { n:4, text:"If not yet decided: take their contact info and let them know we'll reach out" }]},
  { title:"What to say", say:"Great question — let me check on that for you. [After confirming with Anisia or Daphney:] [We are / are not] cancelling today due to weather. [If cancelled:] We'll reach out to reschedule — no cancellation fee applies when we cancel due to weather." }],
  footer:"School closings are a guide — not an automatic trigger. FGL has proceeded with lessons during school closures depending on road conditions. Final call is always Anisia or Daphney." },
{ id:"G4", section:"G", title:"Parent calls to complain about an instructor", warn:"There are three tiers. Read the situation first — then follow the correct tier. Every complaint, regardless of tier, gets logged in the HR spreadsheet by Anisia.", blocks:[
  { title:"Tier 1 — Standard complaint (parent is open about it)", rows:[
    { n:1, text:"Listen fully — do not interrupt, defend the instructor, or express an opinion" },
    { n:2, text:"Acknowledge the parent's concern without agreeing or disagreeing" },
    { n:3, text:"Let them know you're documenting everything and Anisia will be in touch" },
    { n:4, text:"End the call warmly — get the best callback number" },
    { n:5, text:"Write up your call notes immediately — what the parent said, as specifically as possible" },
    { n:6, text:"Email the write-up to the instructor AND Anisia AND the instructor's LTL simultaneously", sub:"All three receive the same information at the same time" },
    { n:7, text:"Note in the student's DSS record: date, brief description, status 'under review'" }]},
  { title:"Tier 2 — Anonymous complaint (parent doesn't want instructor to know)", rows:[
    { n:1, text:"Listen fully — take detailed notes" },
    { n:2, text:"Acknowledge the concern and the request for confidentiality" },
    { n:3, text:"Use the Tier 2 talking points to explain why FGL still needs to share the feedback" },
    { n:4, text:"Email your write-up to Anisia ONLY — do NOT send to the instructor or LTL" },
    { n:5, text:"Note in DSS: date, brief description, 'anonymous — Anisia only'" }]},
  { title:"Tier 2 talking points", say:"We would never share this in a way that creates a problem for your student. We share feedback privately and constructively — the instructor won't know it came from you. Our instructors genuinely want to know when something isn't landing. And we'll make sure any future lessons are with a different instructor." },
  { title:"Tier 3 — Serious complaint (inappropriate conduct, touching, or personal misconduct) — URGENT", rows:[
    { n:1, text:"Listen and take detailed notes — do not comment on the seriousness of the allegation" },
    { n:2, text:"Do NOT offer any resolution on the initial call" },
    { n:3, text:"Email your write-up to Anisia AND Steve simultaneously — mark URGENT in the subject line", sub:"Both receive it at the same time" },
    { n:4, text:"Note in DSS: date, brief description, 'escalated to Anisia + Steve — URGENT'" }]},
  { title:"Tier 1 & 3 — what to say", say:"Thank you for letting us know — I want to make sure we handle this the right way. I'm documenting everything you've shared and making sure Anisia, our General Manager, is aware. She'll be in touch with you. Can I confirm the best way to reach you?" },
  { title:"All tiers — always", rows:[
    { n:1, text:"Anisia reaches out to the instructor promptly — when the complaint comes in, not at a scheduled check-in" },
    { n:2, text:"Every complaint is logged in the HR spreadsheet by Anisia — regardless of tier or severity" },
    { n:3, text:"Tier 1: Anisia or CC calls parent back with resolution — typically a complimentary make-up lesson" },
    { n:4, text:"Tier 2: future lessons are booked with a different instructor" },
    { n:5, text:"Tier 3: Steve and Anisia review lesson footage together before any action is taken" }]}] }
];

export const pricing = [
  { name:"30-Hour Teen Course", sub:"15 Zoom classes + 4 driving lessons (8 hours). Most common teen path.", price:"$999" },
  { name:"8-Hour Teen Course — Class Only", sub:"Classes 1, 10, 11, 12 only. No driving lessons.", price:"$150" },
  { name:"8-Hour Teen Course — Class + Lessons", sub:"Classes 1, 10, 11, 12 plus 4 driving lessons (8 hours).", price:"$975" },
  { name:"Adult 8-Hour Course", sub:"One-day class at Darien, 9am–5:30pm. No driving lessons.", price:"$150" },
  { name:"Standalone Driving Lesson", sub:"Single 2-hour one-on-one lesson.", price:"$199" },
  { name:"Adult 2-Lesson Package", sub:"Two 2-hour lessons (4 hours). Recommended start for adults & au pairs.", price:"$398" },
  { name:"Adult Road Test Concierge", sub:"8-Hour Course + 4 lessons (8 hrs) + road test at FGL.", price:"$975" },
  { name:"Adult 8+8 Package", sub:"8-Hour Course + 8 hours of driving lessons.", price:"$975" },
  { name:"Permit Kit", sub:"CT DMV Manual + extended online practice tests.", price:"$35" }
];

export const policyGroups = [
  { title:"Driving lesson policies", rows:[
    { text:"Late cancellation fee", sub:"Less than 24 hours notice — no exceptions, regardless of reason", tag:"$50" },
    { text:"No-show fee", sub:"Student more than 10 minutes late to a lesson — must be rescheduled", tag:"$50" },
    { text:"No permit = cancelled lesson", sub:"No physical permit — lesson cancelled, fee applied. Photos/copies on phones NOT accepted.", tag:"$50" },
    { text:"Cancellation method", sub:"MUST be through the Online Student Center. Voicemail and email do NOT cancel a lesson.", tag:"OSC only" },
    { text:"Maximum lessons per day", sub:"One 2-hour lesson per day — every student, every day", tag:"1 lesson" },
    { text:"Physical permit required", sub:"Bring the physical learner's permit to every lesson. No exceptions.", tag:"Required" },
    { text:"Closed-toe shoes required", sub:"No flip-flops, sandals, or heels. Sneakers or closed-toe shoes only.", tag:"Required" },
    { text:"Instructor request", sub:"Best effort — not guaranteed, subject to availability", tag:"Best effort" }]},
  { title:"Online class policies", rows:[
    { text:"Late entry", sub:"Cannot enter more than 10 minutes after start — DMV regulation, no exceptions. Must rebook.", tag:"No entry" },
    { text:"Attendance requirement", sub:"Must attend 110 minutes or more for credit. Under 110 = no credit, must rebook.", tag:"110 min" },
    { text:"Zoom account", sub:"Own Zoom account under exact name as in DSS. Never a parent's account.", tag:"Own account" },
    { text:"Camera", sub:"Camera on for the entire class — DMV regulation", tag:"Required" },
    { text:"End-of-class quiz", sub:"Complete and submit through the FGL Student Portal for credit", tag:"Required" },
    { text:"Max classes — school day", sub:"1 class (2 hours) per school day — DMV regulation", tag:"1 class" },
    { text:"Max classes — non-school day", sub:"2 classes (4 hours) per non-school day — DMV regulation", tag:"2 classes" }]},
  { title:"Road test policies", rows:[
    { text:"All requirements complete 2 weeks before test date", sub:"All classes and lessons done at least 2 weeks before the road test — no exceptions", tag:"2 weeks" },
    { text:"Road test fee forfeiture", sub:"Cancel within 1 week of test date → fee forfeited. Illness: doctor's note to waive.", tag:"Forfeit" },
    { text:"Sessions per test day", sub:"15–22 students maximum — DMV-set limit", tag:"15–22" },
    { text:"Physical permit required on test day", sub:"No copies or photos", tag:"Required" },
    { text:"eDEC for DMV testing", sub:"Testing at the DMV requires an eDEC. Request at least 1 week before the DMV test date.", tag:"1 week lead" },
    { text:"After failing a road test", sub:"14-day minimum wait before retesting — CT DMV requirement", tag:"14 days" }]},
  { title:"Permit hold timelines", rows:[
    { text:"Teen 30-Hour Course", sub:"Approximately 4 months", tag:"121 days" },
    { text:"Teen 8-Hour Course", sub:"Approximately 6 months", tag:"181 days" },
    { text:"Adult 18+ (8-Hour Course)", sub:"Approximately 3 months", tag:"91 days" }]},
  { title:"Weather & snow day policy", note:"Do NOT proactively tell students lessons are cancelled until Anisia or Daphney has confirmed. Always check first.", rows:[
    { text:"Public schools are closed", sub:"FGL will typically cancel — but school closings are a guide, not a trigger. Final call: Anisia or Daphney based on road conditions.", tag:"Check first" },
    { text:"Weekend weather concern", sub:"Anisia and Daphney make the call regardless of school status", tag:"Check first" },
    { text:"Cancellation confirmed", sub:"Front desk calls all affected students to notify and reschedule. No fee when FGL cancels.", tag:"No fee" },
    { text:"School closed but lessons proceeding", sub:"This has happened. Confirm with Anisia or Daphney before communicating anything.", tag:"Confirm first" }]},
  { title:"Valid permit printouts", note:"A printed temporary permit is acceptable — but only with the QR code on page 3. Without it, cancel the lesson with the standard $50 fee.", rows:[
    { text:"Physical permit card", sub:"The plastic DMV card is always valid", tag:"✓ Accept" },
    { text:"Temporary printout with QR code (page 3)", sub:"Must be the full printout — all pages, QR code visible", tag:"✓ Accept" },
    { text:"Photo on phone", sub:"Photos, screenshots, or copies on phones — DMV regulation", tag:"✗ Decline" },
    { text:"Printout without QR code", sub:"Partial printout missing page 3 or the QR code is not valid", tag:"✗ Decline" },
    { text:"No permit = no lesson", sub:"Apply $50 no-show fee and reschedule. No exceptions.", tag:"$50 fee" }]}
];

export const systems = [
  { name:"DSS (Driving School Software)", sub:"Everything student-related: enrollment, lesson scheduling, class enrollment, attendance, billing, road tests. Your primary daily tool.", tag:"Primary" },
  { name:"Online Student Center", sub:"Student-facing portal connected to DSS. Booking, class registration, payments. tds.ms/CentralizeSP/Student/Login/freshgreenlight", tag:"Student-facing" },
  { name:"Mailchimp", sub:"FGL's CRM. Every new student added at enrollment. Tags are location-based only. Separate from DSS.", tag:"CRM" },
  { name:"Google Drive", sub:"Shared file storage: attendance sheets, eDECs, completion reports, templates. All former Dropbox files live here.", tag:"File storage" },
  { name:"Google Calendar", sub:"Three class calendars: 30 Hour, 8 Hour, Adult 8 Hour. These feed the public class schedule on the website.", tag:"Scheduling" },
  { name:"Zoom", sub:"All online classroom instruction. Students use their own account under their registered name.", tag:"Classes" },
  { name:"RTBC App (Road Test Bootcamp)", sub:"Student app for logging the 40 practice hours and training modules. Support: fglapp@freshgreenlight.com", tag:"Practice tracking" },
  { name:"Google Tasks", sub:"Shared task management for office staff — Daily / Weekly / Monthly / Quarterly.", tag:"Tasks" },
  { name:"Typeform", sub:"eDEC request form: freshgreenlight.typeform.com/to/tDSBzzBJ → roadtests@freshgreenlight.com", tag:"eDEC requests" }
];

export const people = [
  { name:"Steve Mochel", role:"CEO", focus:"Finance, strategy, marketing, tech. Remote (FL). Email day-to-day, text emergencies." },
  { name:"Anisia Mahabir", role:"General Manager", focus:"Lesson scheduling, instructor coordination, HR complaints. 16.5-year tenure." },
  { name:"Daphney Aupont", role:"Operations Manager", focus:"Fleet, DMV, road tests, facilities. Fairfield LTL. 10.6-year tenure." },
  { name:"RaeAnne", role:"Bookkeeper", focus:"QBO reconciliation, payroll processing." },
  { name:"Ivey", role:"Client Coordinator", focus:"Class scheduling, Google Calendar, organ donation program." },
  { name:"Priscila", role:"Client Coordinator", focus:"Enrollment QC, Mailchimp, open balance checks." },
  { name:"Maritza", role:"Client Coordinator", focus:"Walk-ins (Cos Cob), permit kits, parent packets Mon/Tue. In training." },
  { name:"John", role:"Fleet & Facilities Asst.", focus:"Fleet maintenance coordination, supplies (part-time)." },
  { name:"Road Test Coordinator", role:"Road Test Manager", focus:"Road test administration (Tim Chopourian departing — position being filled)." }
];

export const locations = [
  { name:"Cos Cob (Greenwich)", ltl:"Shawn Murphy — Master Instructor", sub:"221 E. Putnam, Cos Cob, CT. Park in front, elevator to 2nd floor, turn left. Walk-ins handled by Maritza." },
  { name:"Darien", ltl:"Al", sub:"74 Edgerton Street, Darien, CT. Adult 8-Hour Course held here (Sat/Sun, 9am–5:30pm, twice monthly). Off I-95, next to Noroton Heights station." },
  { name:"Fairfield", ltl:"Daphney Aupont — also Operations Manager", sub:"1495 Black Rock Turnpike, Fairfield, CT 06825." },
  { name:"Westport", ltl:"Ted Mitchell — Master Instructor", sub:"728 Post Road East, Westport, CT (second floor)." },
  { name:"Wilton", ltl:"Pete", sub:"126 Old Ridgefield Road, Wilton, CT (use rear entrance)." }
];

export const backup = [
  { task:"Road test day proctoring", owner:"Road Test Coordinator", backup:"Daphney" },
  { task:"eDEC entry — DMV system", owner:"Road Test Coordinator", backup:"Daphney" },
  { task:"Road test date entry in DSS", owner:"Road Test Coordinator", backup:"Daphney" },
  { task:"DSS lesson scheduling setup", owner:"Anisia", backup:"Priscila (partial)" },
  { task:"Class rotation entry in DSS", owner:"Ivey", backup:"Anisia" },
  { task:"Enrollment QC check (daily)", owner:"Priscila", backup:"Ivey → Anisia" },
  { task:"Mailchimp new student entry", owner:"Priscila", backup:"No backup identified" },
  { task:"Attendance sheet filing", owner:"Priscila", backup:"Any Client Coordinator" },
  { task:"Open balance check", owner:"Priscila", backup:"Maritza (in training)" },
  { task:"Payroll worksheet submission", owner:"Steve", backup:"—" },
  { task:"Fleet maintenance coordination", owner:"John", backup:"Daphney" },
  { task:"DMV compliance & renewals", owner:"Daphney", backup:"—" },
  { task:"Insurance letter generation", owner:"Any Client Coordinator", backup:"—" },
  { task:"Welcome kit assembly", owner:"Instructors + Maritza", backup:"—" },
  { task:"Organ donation coordination", owner:"Ivey", backup:"—" },
  { task:"Instructor staffing & coverage", owner:"Anisia", backup:"—" },
  { task:"Closing out past classes (DSS)", owner:"Ivey", backup:"Anisia" },
  { task:"Completing records + eDEC number in DSS", owner:"Road Test Coordinator", backup:"Daphney" }
];

export const contacts = [
  { name:"Main phone", detail:"(203) 861-1188 · Mon–Fri 10am–6pm, Sat 10am–3pm" },
  { name:"Online classes", detail:"onlineclasses@freshgreenlight.com" },
  { name:"Road tests", detail:"roadtests@freshgreenlight.com · 475.221.2475" },
  { name:"RTBC app support", detail:"fglapp@freshgreenlight.com" },
  { name:"eDEC request form", detail:"freshgreenlight.typeform.com/to/tDSBzzBJ" },
  { name:"Online Student Center", detail:"tds.ms/CentralizeSP/Student/Login/freshgreenlight" },
  { name:"Website", detail:"www.freshgreenlight.com" }
];

export const escalation = [
  { sit:"Billing dispute or refund request", who:"Anisia", how:"Email" },
  { sit:"Unhappy parent — escalated complaint", who:"Anisia", how:"Email" },
  { sit:"Instructor no-show or emergency", who:"Anisia", how:"Text → call" },
  { sit:"DMV paperwork or eDEC issue", who:"Daphney", how:"Email" },
  { sit:"Road test day emergency", who:"Daphney", how:"Text → call" },
  { sit:"Fleet or vehicle issue", who:"Daphney", how:"Email" },
  { sit:"Website down", who:"Steve", how:"Email or text" },
  { sit:"DSS system down", who:"Anisia", how:"Text → call" },
  { sit:"HR or staff concern", who:"Anisia or Steve", how:"Email" },
  { sit:"Safety emergency", who:"911 first — then text Anisia or Steve", how:"911 first" }
];

export const ops = [
{ freq:"Daily", items:[
  { id:"opening", title:"Opening checklist", owner:"All Client Coordinators", rows:[
    { n:1, text:"Check voicemails", sub:"Return all calls within the hour or first thing in the morning", tag:"All CCs" },
    { n:2, text:"Triage the lessons@ email inbox", sub:"Respond to or forward all actionable emails before phones get busy", tag:"All CCs" },
    { n:3, text:"Review today's lesson schedule in DSS", sub:"Confirm all instructors and vehicles are assigned", tag:"All CCs" },
    { n:4, text:"Check for same-day cancellations or reschedules", sub:"Process any late cancellation fees that apply", tag:"All CCs" },
    { n:5, text:"Check DSS for new enrollments from yesterday", sub:"Flag records needing QC review", tag:"Priscila" },
    { n:6, text:"Confirm road test paperwork is ready", sub:"Only on days a road test is scheduled", tag:"Road Test Mgr" },
    { n:7, text:"Flag unresolved overnight issues to Anisia or Daphney", sub:"Email — student name, issue, action taken", tag:"All CCs" }]},
  { id:"monday", title:"Monday morning triage", owner:"All Client Coordinators", rows:[
    { n:1, text:"Check ALL weekend voicemails before handling new calls", sub:"Do not answer live calls until all weekend messages are logged", tag:"All CCs" },
    { n:2, text:"Read and triage ALL weekend emails in the lessons@ inbox", tag:"All CCs" },
    { n:3, text:"Log any weekend cancellations in DSS", sub:"Assess and process late cancellation fees", tag:"All CCs" },
    { n:4, text:"Check for weekend no-shows", sub:"Flag each for fee processing and rescheduling", tag:"All CCs" },
    { n:5, text:"Review weekend class attendance records", sub:"File any unfiled attendance sheets in Google Drive", tag:"Priscila" },
    { n:6, text:"Update DSS with any weekend changes not yet entered", sub:"Lesson status, reschedules, enrollments", tag:"All CCs" }]},
  { id:"qc", title:"Enrollment QC check", owner:"Priscila · backup Ivey → Anisia", note:"Maritza is being trained on this process. See Play B2 for the full field-by-field checklist.", rows:[
    { n:1, text:"Filter DSS for enrollments from the past 24 hours" },
    { n:2, text:"Verify all fields against Play B2's checklist", sub:"Name (DMV format), DOB, address, location, permit details, program, parent info" },
    { n:3, text:"Call or email to correct discrepancies — do not guess" },
    { n:4, text:"Flag unresolvable discrepancies to Anisia before end of day" }]},
  { id:"attsheet", title:"Attendance sheet filing", owner:"Priscila · backup any CC", rows:[
    { n:1, text:"Log in to Zoom using OnlineClasses@freshgreenlight.com", sub:"Never use a personal Zoom account" },
    { n:2, text:"Account Management → Reports → Meeting and Webinar History" },
    { n:3, text:"Select the class date, click the participant number to open attendance data" },
    { n:4, text:"Verify the class date and class number are correct" },
    { n:5, text:"Select 'Export with meeting data' and click Export" },
    { n:6, text:"Name the file: [YYYY-MM-DD] Class [#]", sub:"Example: 2026-03-16 Class 7" },
    { n:7, text:"Save to Google Drive → Attendance → [Month] folder" },
    { n:8, text:"Two classes same day? File each as a separate export", sub:"Class number in the filename distinguishes them" }]},
  { id:"lessonmon", title:"Daily lesson monitoring", owner:"Anisia", rows:[
    { n:1, text:"Review the DSS lesson grid for the next 7 days" },
    { n:2, text:"Flag any slots unbooked within 48 hours — fill or release" },
    { n:3, text:"Check for instructor conflicts reported by LTLs", sub:"Illness, car issues, emergencies — reschedule affected students immediately" },
    { n:4, text:"Communicate vehicle assignment changes before the lesson day — not the morning of" },
    { n:5, text:"Update DSS if any slot changes are needed" }]},
  { id:"closing", title:"Closing checklist", owner:"All Client Coordinators", rows:[
    { n:1, text:"Ensure all student records updated in DSS from today's activity", tag:"All CCs" },
    { n:2, text:"Forward unresolved calls or emails with full context — not just a forward", tag:"All CCs" },
    { n:3, text:"Confirm tomorrow's lesson schedule is set and instructors confirmed", tag:"Anisia" },
    { n:4, text:"Clear or flag the lessons@ inbox for the next morning", tag:"All CCs" },
    { n:5, text:"Log any issues, complaints, or escalations in Google Drive", tag:"All CCs" }]}]},
{ freq:"Weekly", items:[
  { id:"balance", title:"Open balance check", owner:"Priscila", note:"Open balances are now rare due to recent pricing changes — this typically runs quickly.", rows:[
    { n:1, text:"Run the outstanding balance report in DSS" },
    { n:2, text:"Review for balances outstanding more than 30 days" },
    { n:3, text:"Flag significant outstanding balances to Steve via email" },
    { n:4, text:"Note any discrepancies in the report" },
    { n:5, text:"Train Maritza on this process during downtime", sub:"Maritza is the intended backup" }]},
  { id:"mailchimp", title:"Mailchimp new student entry", owner:"Priscila", note:"Tags are location-based only: Greenwich, Darien, Fairfield, Westport, Wilton.", rows:[
    { n:1, text:"Cross-reference new DSS enrollments from the past week against Mailchimp" },
    { n:2, text:"Add missing students: first name, last name, email, location tag" },
    { n:3, text:"Apply the correct location tag" },
    { n:4, text:"Verify all recently added contacts have the correct tag" }]},
  { id:"seats", title:"Road test seat monitoring", owner:"Road Test Coordinator", rows:[
    { n:1, text:"Review all road test sessions scheduled in the next 4–6 weeks in DSS" },
    { n:2, text:"Identify sessions with significant open capacity" },
    { n:3, text:"Send a Mailchimp broadcast to eligible students who haven't booked", sub:"Only when open seats exist" },
    { n:4, text:"Flag to Daphney if demand exceeds capacity", sub:"She requests additional test dates from the DMV" },
    { n:5, text:"Sessions run 15–22 students maximum — never exceed the DMV cap" }]},
  { id:"release", title:"Weekly release of pending BTW lessons", owner:"Anisia", note:"Released on a rolling basis — not all at once.", rows:[
    { n:1, text:"Determine the release window per location", sub:"Busier (Fairfield, Westport, Darien): 2 weeks out. Less busy (Cos Cob, Wilton): further out." },
    { n:2, text:"Open the pending lesson queue for the location in DSS" },
    { n:3, text:"Release lessons for the appropriate dates" },
    { n:4, text:"Send the Monday Mailchimp email alerting students to new slots" }]},
  { id:"slotsemail", title:"Weekly Mailchimp email — fill open lesson slots", owner:"Anisia", note:"Sent every Monday. Second blast Wednesday, sometimes Friday for weekend slots.", rows:[
    { n:1, text:"Monday: review open BTW slots across all locations in DSS" },
    { n:2, text:"Draft the email: locations, dates, booking link" },
    { n:3, text:"Send to the FGL student list" },
    { n:4, text:"Significant openings mid-week? Second blast Wednesday focused on weekend availability" },
    { n:5, text:"Weekend slots still open Friday? Third blast highlighting same-weekend availability" }]}]},
{ freq:"Monthly", items:[
  { id:"deact-class", title:"Class session deactivation", owner:"Ivey", rows:[
    { n:1, text:"DSS → Classroom → Class List" },
    { n:2, text:"Filter for passed sessions this month", sub:"Refine Search — check 'Completed'" },
    { n:3, text:"Verify all students have attendance credited", sub:"Check against the Google Drive attendance file first" },
    { n:4, text:"Confirm the attendance sheet is filed in Google Drive for each session" },
    { n:5, text:"Flag unresolved attendance to Anisia", sub:"Email with class name, date, students affected" }]},
  { id:"collateral", title:"Collateral inventory check", owner:"Daphney", rows:[
    { n:1, text:"Check Homework Cards inventory at each location (START / PARK / MERGE / PASS)" },
    { n:2, text:"Check Parent Playbooks at each location" },
    { n:3, text:"Check Permit Test Prep Kits, Parent Welcome Kits, magnets, business cards, folders" },
    { n:4, text:"Identify items running low (less than 2-week supply)" },
    { n:5, text:"Place replenishment orders" },
    { n:6, text:"Coordinate delivery via John or LTLs" }]},
  { id:"payroll", title:"Payroll worksheet submission", owner:"Steve (input) / RaeAnne (processing)", rows:[
    { n:1, text:"Pull the BTW cancellation report from DSS for the pay period" },
    { n:2, text:"Identify all lessons cancelled with less than 24 hours notice", sub:"Instructor is owed pay for these even though the lesson didn't run" },
    { n:3, text:"Enter late-cancel hours into the instructor payroll worksheet" },
    { n:4, text:"Flag disputed cancellations before submitting" },
    { n:5, text:"Submit by the 1st and 16th", sub:"Instructor payroll: 1st & 16th. Staff: 10th & 25th." }]},
  { id:"deact-students", title:"Deactivating old / inactive students", owner:"Maritza", note:"18-month inactivity threshold. Anisia maintains the spreadsheet.", rows:[
    { n:1, text:"Receive the inactive student list from Anisia's spreadsheet" },
    { n:2, text:"Check each student for an outstanding balance in DSS", sub:"Balance exists → do not deactivate, flag to Priscila" },
    { n:3, text:"Check for scheduled future lessons", sub:"Lessons booked → do not deactivate, flag to Anisia" },
    { n:4, text:"Deactivate each cleared student in DSS" },
    { n:5, text:"Mark each deactivated student complete in Anisia's spreadsheet" }]},
  { id:"kits", title:"Welcome kit assembly", owner:"All Instructors + Maritza", rows:[
    { n:1, text:"Instructors assemble kits during lesson cancellations as time allows", sub:"Kits for all 5 locations" },
    { n:2, text:"Maritza handles permit kits and parent packets on Mondays and Tuesdays" },
    { n:3, text:"Check kit inventory at each location — flag shortages to Daphney" }]},
  { id:"availemail", title:"Monthly instructor availability email", owner:"Anisia", rows:[
    { n:1, text:"First week of each month: email all instructors for next month's availability and time off" },
    { n:2, text:"LTLs: collect availability 1.5–2 months out" },
    { n:3, text:"Update DSS availability before creating new lesson slots" },
    { n:4, text:"Flag significant availability changes to Steve — capacity affects marketing" }]}]},
{ freq:"Quarterly", items:[
  { id:"rotation", title:"Build class rotation", owner:"Ivey", note:"Full DSS procedure — see System Guide 'Create a class rotation in DSS'.", rows:[
    { n:1, text:"Confirm classroom instructor availability with Anisia" },
    { n:2, text:"Build the rotation in DSS per the System Guide", sub:"Status Pending until triple-checked; Size 40 always; Sessions 15 (30-Hr) or 4 (8-Hr)" },
    { n:3, text:"Create Google Calendar events for every session", sub:"15 events for 30-Hour, 4 for 8-Hour" },
    { n:4, text:"Verify events appear on the FGL website class schedule" },
    { n:5, text:"When ready for new students: set Website/Student Portal Enrollment to Yes" }]},
  { id:"instrsched", title:"Confirm instructor schedule", owner:"Anisia", rows:[
    { n:1, text:"Contact each instructor or their LTL to confirm seasonal availability" },
    { n:2, text:"Collect: available days, preferred hours, blackout dates, vehicle preference" },
    { n:3, text:"Update instructor availability in DSS before creating lesson slots" },
    { n:4, text:"Flag capacity changes to Steve — marketing may need to adjust" },
    { n:5, text:"Create open BTW lesson slots in DSS", sub:"See System Guide" }]},
  { id:"testdates", title:"Enter road test dates", owner:"Road Test Coordinator", rows:[
    { n:1, text:"Receive confirmed test dates from Daphney (annual DMV coordination)" },
    { n:2, text:"Create a road test session per date in DSS", sub:"Location, date, start time, max students 15–22, DMV agent" },
    { n:3, text:"Block road-test vehicles in DSS — not bookable for lessons on test days" },
    { n:4, text:"Open slots to students in the Online Student Center" },
    { n:5, text:"Add all dates to the shared Google Calendar: location, time, agent" },
    { n:6, text:"Notify Anisia and Daphney that new test dates are live" }]},
  { id:"hrreview", title:"HR spreadsheet review", owner:"Anisia", note:"Every complaint is logged at the time received. This review checks for patterns.", rows:[
    { n:1, text:"Filter complaints from the past quarter" },
    { n:2, text:"Identify any instructor with 2+ complaints in the period", sub:"A single complaint is minor — a pattern is a management issue" },
    { n:3, text:"Review whether repeat complaints are the same type" },
    { n:4, text:"Decide: coaching, formal conversation, or further action" },
    { n:5, text:"Document the outcome in the HR spreadsheet" },
    { n:6, text:"Escalate serious conduct patterns to Steve", sub:"Email with summary and spreadsheet excerpt" }]}]},
{ freq:"Annual", items:[
  { id:"dmvcoord", title:"DMV coordination — offsite testing", owner:"Daphney", rows:[
    { n:1, text:"Confirm FGL's continued participation in the Offsite Testing program with the CT DMV liaison" },
    { n:2, text:"Submit requested test dates for all five locations for the coming year" },
    { n:3, text:"Confirm DMV agent assignments per location" },
    { n:4, text:"File updated DMV paperwork to maintain licensed testing site status" },
    { n:5, text:"Share the confirmed schedule with the Road Test Coordinator and Anisia" }]},
  { id:"manualreview", title:"Operations manual review", owner:"Anisia + Steve", note:"Quarterly recommended; annual minimum. Update immediately when anything changes.", rows:[
    { n:1, text:"Review all three documents for accuracy: Front Desk Bible, Playbook, Operations Calendar" },
    { n:2, text:"Update staff changes in the directory" },
    { n:3, text:"Add new procedures developed since the last review" },
    { n:4, text:"Confirm all gap items are resolved or actively tracked" },
    { n:5, text:"Increment version number and update the date on each cover" },
    { n:6, text:"Redistribute updated documents to all staff" }]}]},
{ freq:"As needed", items:[
  { id:"coverage", title:"Instructor staffing & coverage", owner:"Anisia", rows:[
    { n:1, text:"Instructor calls out sick or has an emergency: contact Anisia immediately", sub:"Text Anisia — do not leave a voicemail", tag:"All CCs" },
    { n:2, text:"Anisia identifies an available replacement instructor" },
    { n:3, text:"Replacement available: reassign affected lessons in DSS" },
    { n:4, text:"No replacement: contact each affected student to reschedule", sub:"No cancellation fee when FGL cancels" },
    { n:5, text:"Update DSS to reflect all changes" },
    { n:6, text:"Notify the location's LTL of the coverage change", sub:"Email — instructor name, date, lessons affected" }]},
  { id:"organ", title:"Organ donation speaker program", owner:"Ivey", note:"NEDS contact: Jennifer Cray — Jennifer_Cray@neds.org — (617) 571-9582.", rows:[
    { n:1, text:"Check the CT Donate Life Class Volunteer Info spreadsheet for Seth's availability", sub:"Seth Newman fills in his own name" },
    { n:2, text:"Email Seth Newman (Seth_Newman@neds.org) and the class instructor 1–2 days before the class" },
    { n:3, text:"Seth and the instructor have an established Zoom rhythm — Seth speaks at the start of class" },
    { n:4, text:"Update the scheduling spreadsheet after the session" }]},
  { id:"completionreport", title:"Road test completion report", owner:"Road Test Coordinator", note:"Tim Chopourian established this format. Maintain the tone, structure, and specificity exactly.", rows:[
    { n:1, text:"After each test day: draft the completion email", sub:"Subject: Road Test Completion Report [Location] [Date]" },
    { n:2, text:"Opening line: one sentence confirming completion + weather", sub:"'Road tests have been completed and not impeded by weather in Darien for 3/5/2026'" },
    { n:3, text:"Passes section: fun header ('Glorious!', 'Blessed!') + Last, First list" },
    { n:4, text:"Fails section: fun header + each student with a SPECIFIC failure reason", sub:"'Only using mirrors, not checking blindspot prior to reverse park' — not just 'parking'" },
    { n:5, text:"Name the DMV agent at the close" },
    { n:6, text:"Send to the full distribution list: instructor team + leadership (20+ recipients)" },
    { n:7, text:"Log all failures in the shared Road Test Failure Google Sheet", sub:"Date, location, student name, specific failure reason" }]}]}
];

export const guides = [
{ id:"btwslots", title:"Create open BTW lesson slots", owner:"Anisia", rows:[
  { n:1, text:"Confirm instructor availability is updated in DSS before creating any slots" },
  { n:2, text:"Log in to DSS → lesson scheduling module" },
  { n:3, text:"Create a new slot: instructor, vehicle, location, date, start time, lesson type", sub:"Lesson types: START / PARK / MERGE / PASS" },
  { n:4, text:"Verify the vehicle is not already blocked for that date", sub:"Road tests, maintenance, other conflicts" },
  { n:5, text:"Publish the slot so it appears in the Online Student Center" },
  { n:6, text:"Repeat for all available instructor slots in the window" }],
  footer:"⚠ GAP — DSS navigation screenshots needed. Anisia to provide exact menu paths." },
{ id:"attverify", title:"Verify a disputed attendance (110-minute rule)", owner:"Any Client Coordinator", note:"110 minutes or more = credit. Under 110 = no credit, must rebook. No exceptions. Same procedure as Play D3.", rows:[
  { n:1, text:"Get the class date and class number from the student" },
  { n:2, text:"Google Drive → Attendance folder → file for that date and class number" },
  { n:3, text:"Check the student's total time in the session" },
  { n:4, text:"110+ minutes: mark present in DSS — Classroom → Class List → Refine Search ('Completed') → session → Attendance → Present → SAVE" },
  { n:5, text:"Under 110: direct the student to book a makeup class" },
  { n:6, text:"Secondary check: OnlineClasses inbox for the in-session photo" }] },
{ id:"rotation", title:"Create a class rotation in DSS", owner:"Ivey", note:"Session = class number (1–15). Classroom ID# = rotation name: Year_Month_Day_ProgramType, e.g. 28Dec25_30HrTEST.", rows:[
  { n:1, text:"Classroom → Class List → '+ Add New'" },
  { n:2, text:"'Multi Session Class' for a full rotation; 'Single Session Class' for a one-off" },
  { n:3, text:"Set Classroom Service: 30 Hour Class, 8Hr Teen, or 8Hr Adult" },
  { n:4, text:"Status = Pending — do not open until triple-checked" },
  { n:5, text:"Classroom ID: Year_Month_Day_ProgramType" },
  { n:6, text:"Size (Enrollment) = 40 always", sub:"DMV maximum" },
  { n:7, text:"Makeup Size starts at 20 — increase as needed" },
  { n:8, text:"Website/Student Portal Enrollment = No until ready to go live" },
  { n:9, text:"Location = Online (or Darien for adult in-person)" },
  { n:10, text:"Session Dates = Repetitive for a standard rotation", sub:"Manual Select only for a single makeup class" },
  { n:11, text:"Total Sessions: 15 for 30-Hour, 4 for 8-Hour" },
  { n:12, text:"Select weekday(s) → 'Set Session Times'" },
  { n:13, text:"Select Teacher — must be in DSS and connected to Zoom" },
  { n:14, text:"Allow Double Booking = No always" },
  { n:15, text:"Copy Web Signup Description from a previous class of the same type" },
  { n:16, text:"Leave CR Notes and Internal CR Notes blank" },
  { n:17, text:"Save — verify the session grid shows all sessions" },
  { n:18, text:"Verify with Single Instructor View — sessions and dates must match" },
  { n:19, text:"Triple-check — then change Status from Pending to Open" },
  { n:20, text:"Google Calendar → correct FGL calendar → one event per session", sub:"15 events for 30-Hour, 4 for 8-Hour: class number, rotation, teacher, date, times, location" },
  { n:21, text:"Verify events appear on the website class schedule" },
  { n:22, text:"Makeup bookings only: keep Portal Enrollment = No, set Makeup Size to 50" },
  { n:23, text:"New student enrollment: change Portal Enrollment to Yes" }] },
{ id:"roadtestsession", title:"Create a road test session in DSS", owner:"Road Test Coordinator", rows:[
  { n:1, text:"Navigate to the road test scheduling module in DSS" },
  { n:2, text:"Create a new session: location, date, start time, max students (15–22), DMV agent" },
  { n:3, text:"Block the assigned vehicles in DSS — unavailable for lessons that day" },
  { n:4, text:"Open the session to students in the Online Student Center" },
  { n:5, text:"Add the session to the shared Google Calendar with all details" },
  { n:6, text:"Notify Anisia and Daphney via email that new dates are live" }] },
{ id:"cancelfee", title:"Process a lesson cancellation and fee", owner:"Any Client Coordinator", rows:[
  { n:1, text:"Open the student record in DSS" },
  { n:2, text:"Navigate to their scheduled lesson" },
  { n:3, text:"Cancel the lesson in DSS" },
  { n:4, text:"Apply the $50 late cancellation or no-show fee", sub:"Less than 24 hours notice or student no-showed" },
  { n:5, text:"Add a note: reason, fee applied, date, your name" },
  { n:6, text:"Offer to rebook a new lesson on the same call" }] },
{ id:"edec", title:"Process an eDEC request", owner:"Road Test Coordinator", note:"Student form: freshgreenlight.typeform.com/to/tDSBzzBJ → roadtests@freshgreenlight.com", rows:[
  { n:1, text:"Receive the eDEC request via roadtests@freshgreenlight.com" },
  { n:2, text:"Verify all program requirements are complete in DSS", sub:"All classes and lessons must be done first" },
  { n:3, text:"Log in to the CT DMV system", sub:"dmvroadtest.ct.gov/dmv/do-it-online/ExternalReports/AdminReports" },
  { n:4, text:"Enter: full name (must match permit exactly), DOB, permit number, program, completion date" },
  { n:5, text:"Download or print the generated eDEC" },
  { n:6, text:"Save to Google Drive → eDECs folder → test date subfolder" },
  { n:7, text:"Email the eDEC to the student for DMV scheduling" },
  { n:8, text:"Enter the eDEC number into the student's DSS profile", sub:"Completes the record for DMV compliance" }],
  footer:"Requests submitted after business hours are processed the next business day." },
{ id:"attfile", title:"File attendance in Google Drive", owner:"Priscila", rows:[
  { n:1, text:"Log in to Zoom with OnlineClasses@freshgreenlight.com", sub:"Never a personal account" },
  { n:2, text:"Account Management → Reports → Meeting and Webinar History" },
  { n:3, text:"Select the class date, click the participant number" },
  { n:4, text:"Verify class date and class number" },
  { n:5, text:"'Export with meeting data' → Export" },
  { n:6, text:"Name: [YYYY-MM-DD] Class [#] — e.g. 2026-03-16 Class 7" },
  { n:7, text:"Save to Google Drive → Attendance → [Month] folder" },
  { n:8, text:"Two classes same day = two separate exports" }] },
{ id:"insurance", title:"Generate an insurance letter", owner:"Any Client Coordinator", note:"Template: Google Drive → Shared Drives → FGL Front Desk → Cos Cob Front Desk Files → CT Student Insurance Letter.", rows:[
  { n:1, text:"Ask: 'Specific form, or just proof of completion?'", sub:"Specific form → escalate to Daphney or Anisia" },
  { n:2, text:"Verify program completion in DSS" },
  { n:3, text:"Open the template in Google Drive" },
  { n:4, text:"Fill in: name, DOB, program, completion date, FGL license number" },
  { n:5, text:"Email as PDF (or mail if required)" },
  { n:6, text:"Note the request in the student's DSS record with date" }] },
{ id:"unavail", title:"Set instructor unavailability / vacation in DSS", owner:"Anisia", rows:[
  { n:1, text:"DSS → Multi Instructor View", sub:"Primary method" },
  { n:2, text:"Right-click the instructor's name box in the schedule" },
  { n:3, text:"Select 'Set Unavailability' from the dropdown" },
  { n:4, text:"Set the date range and reason" },
  { n:5, text:"Longer vacations: use the instructor's staff profile instead", sub:"Better for multi-week absences" },
  { n:6, text:"Enter the vacation range in the profile's availability section" },
  { n:7, text:"Save — verify dates are blocked in Multi Instructor View before scheduling" }] },
{ id:"snowpay", title:"Snow day cancellations & payroll reporting", owner:"Anisia", rows:[
  { n:1, text:"Decision made by Anisia and Daphney based on road conditions", sub:"Do not notify students until confirmed — see Play G3" },
  { n:2, text:"Office staff contact all affected students", sub:"No cancellation fee for weather cancellations" },
  { n:3, text:"Instructors ARE compensated for weather-cancelled lessons" },
  { n:4, text:"Anisia compiles the list of instructors with cancelled BTW lessons" },
  { n:5, text:"Send the list to Steve for payroll processing" }] },
{ id:"seasonal", title:"Seasonal schedules & BTW shifts spreadsheet", owner:"Anisia", rows:[
  { n:1, text:"March: send the Summer Schedule email to all instructors", sub:"Summer availability, preferred hours, extended time off" },
  { n:2, text:"Late summer: send the Back to School Schedule email" },
  { n:3, text:"Update the BTW Shifts Spreadsheet with each instructor's shifts", sub:"Days, hours, locations, changes from prior season" },
  { n:4, text:"Update twice per year — summer and back to school. Manual." },
  { n:5, text:"Add new instructors as they onboard — tied to the hiring cycle" },
  { n:6, text:"Share the updated spreadsheet with Daphney and Steve" }] },
{ id:"rtcworkflow", title:"Road Test Coordinator — full workflow", owner:"Road Test Coordinator · backup Daphney", note:"Email: roadtests@freshgreenlight.com · Phone: 475.221.2475 · DMV portal: dmvroadtest.ct.gov/dmv/do-it-online/", rows:[
  { n:1, text:"1 month out: send Month Out Emails to every registered student", sub:"First-half tests: early prior month. Second-half: mid prior month. Notify the office team when sent." },
  { n:2, text:"2–3 weeks out: verify classes & lessons student by student", sub:"30-Hr: 15 classes + 4 lessons. 8-Hr: classes 1/10/11/12 + 4 lessons. Adult: min 1 FGL lesson. Record DOB, permit #, most recent BTW instructor (CI# needed for eDEC)." },
  { n:3, text:"Missing requirements: send the Missing Classes Email and help them reschedule" },
  { n:4, text:"1 week out (Monday): send the One Week Out Email", sub:"Requires students to send a permit copy to roadtests@ — subject: name + test date" },
  { n:5, text:"~1 week before: process eDECs in the DMV portal", sub:"Admin Dash → 'Add or update e-Driver Education Certificate' → CI# → student info → Save → Print/Save as PDF to Drive. Print physical copies for teens (insurance). Enter eDEC # in DSS." },
  { n:6, text:"Register students on the DMV website", sub:"New: 'Schedule New Appointment' with FGL phone + roadtests@. Retesters: 'Retrieve PIN' → 'Reschedule Appointment'. Cross-check DMV roster vs FGL roster. Print TWO roster copies." },
  { n:7, text:"1–2 days before: send individual arrival time emails", sub:"Tests start 8:00 AM (some agents 7:30). Stagger 15-minute intervals. Assemble the paperwork folder: 2 rosters, R279 per student + extras, printed eDECs — leave at the test location the day before." },
  { n:8, text:"Test day: arrive 30+ minutes early", sub:"Get keys (prefer 2024+ models), check insurance/registration/inspection/warning lights, temper the car, locate the paperwork folder" },
  { n:9, text:"Check-in: collect permit, parent signs R279 at the 'X' + writes DL#", sub:"Adults: fill in signature and DL# yourself — proof of FGL BTW lessons. Paperclip permit to R279. Hand parent the eDEC. Do NOT fill vehicle info until on-site." },
  { n:10, text:"Run students top to bottom of the roster in 15-minute waves — student hands the R279 packet to the agent" },
  { n:11, text:"PASS: congratulate; email tomorrow with permanent license instructions; pink slip + permit together — pink slip alone is NOT a license" },
  { n:12, text:"FAIL: be encouraging; email tomorrow with a new test date; mark P/F on your roster copy" },
  { n:13, text:"After: return keys, send the Road Test Completion Report to the full distribution list" },
  { n:14, text:"Next business day: pass emails + close accounts; fail → soonest retest, enroll, Retesters Email; log failures in the Road Test Failure Sheet", sub:"Friday tests: send the pass email the same day" }] }
];

export const quickFacts = [
  { big:"$50", label:"Late cancel / no-show fee" },
  { big:"121 / 181 / 91", label:"Permit hold days (30-Hr / 8-Hr / Adult)" },
  { big:"10 min", label:"Class late-entry cutoff" },
  { big:"110 min", label:"Attendance credit minimum" },
  { big:"2 weeks", label:"Requirements done before road test" },
  { big:"40", label:"Max students per online class" },
  { big:"14 days", label:"Retest wait after a failed road test" },
  { big:"$50", label:"Admin fee on voluntary withdrawals" }
];
