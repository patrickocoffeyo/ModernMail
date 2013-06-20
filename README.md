#Modern Mail
Modern Mail is a lil' package that allows you to quickly and easily write emails. It enables you to use LESS, and includes a skinned-down email version of Bootstrap. Grunt is used to compile all the LESS, and will also rip out an <code>.zip</code> archive of your email, so you can import it into Mailchimp, Madmimi, or whatever email service you use.

##Grunt
To get started, run <code>npm install</code>. Then, run <code>grunt watch</code> while you are building your email. This cranks up a watch tasks that compiles all the less into the email.html file. Running <code>grunt</code> will finalize the project by compiling the less, inlining all of the styles, and archive the project into a <code>.zip</code> file. (archives appear in the <code>/output/</code> folder).

##LESS
Write all of your styles (while running the <code>grunt watch</code> task) in <code>/assets/css/app.less</code>. All LESS will be processed into <code>/assets/css/style.css</code>, which is loaded into <code>email.html</code>.

##Client-Specific Email Fixes
Modern Mail includes a number of email client css fixes, (kudos to [HTML Email Boilerplate](http://htmlemailboilerplate.com/), I borrowed a few of the fixes from there.)

##CSS Inliner
When you run <code>grunt</code> an email.inline.html file with all of your LESS/CSS inline will be created/updated. That's what goes into the final <code>.zip</code> archive as well.

##Archiving
Run <code>grunt</code> in the project root, and an archive of your email and it's assets will be zipped into <code>/output/final.zip</code>

##In Progress
I'm doing testing as I get time to fix issues in this project, and make it as easy as possible to quickly rip out compatable emails.
