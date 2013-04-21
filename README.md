#Modern Mail
Modern Mail is a lil' package that allows you to quickly and easily write emails. It allows you to use LESS, and includes a skinned-down email version of Bootstrap by default, although you can use whatever you like. Grunt is used to compile all the LESS, and will also rip out an <code>.zip</code> archive of your email, so you can import it into Mailchimp, Madmimi, or whatever email service you use.

##Grunt
To get started, run <code>grunt init:gruntfile</code> and <code>npm install</code>. Then, run <code>grunt watch</code> while you are writing your LESS and <code>grunt</code> when you want finalize the project and archive it. (archives appear in the <code>/output/</code> folder).

##LESS
All styling can be done (while running the <code>grunt watch</code> task) to <code>/assets/css/app.less</code>. All LESS will be processed into <code>/assets/css/style.css</code>.

##Client-Specific Email Fixes
Modern Mail includes a number of email client css fixes, (kudos to [HTML Email Boilerplate](http://htmlemailboilerplate.com/), I borrowed some of the fixes from there.)

##Archiving
Run <code>grunt</code> in the project root, and an archive of your email and it's assets will be zipped into <code>/output/final.zip</code>

##In Progress
There's a number of things I'm working on right now in Modern Mail, including a CSS Inline task.
