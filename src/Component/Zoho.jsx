import {
  ChevronRight,
  Mail,
  BookOpen,
  LayoutTemplateIcon as LayoutProjective,
} from "lucide-react";

function Zoho() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <img
              src="https://sjc.microlink.io/vINWFWnCVNimBoIpBRvb8w0Kl1xNhTutFKlIfFL-64Y7We9vBcn81cnwq92ij43C1Ea-TMjF8PfRNO9qAPPc5Q.jpeg"
              alt="Zoho Logo"
              width={100}
              height={40}
              className="object-contain"
            />
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium">
                Products
              </a>
              <a href="#" className="text-sm font-medium">
                Enterprise
              </a>
              <a href="#" className="text-sm font-medium">
                Customers
              </a>
              <a href="#" className="text-sm font-medium">
                Company
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button size="sm">Sign In</button>
            <button size="sm" className="bg-red-600 hover:bg-red-700">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container grid lg:grid-cols-2 gap-12 py-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Your life&apos;s work,
            <br />
            powered by our life&apos;s work
          </h1>
          <p className="text-lg text-muted-foreground max-w-[600px]">
            A unique and powerful software suite to transform the way you work.
            Designed for businesses of all sizes, built by a company that values
            your privacy.
          </p>
          <button className="bg-red-600 hover:bg-red-700">
            GET STARTED FOR FREE
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        {/* Featured Apps */}
        <div className="space-y-6">
          <h2 className="text-sm font-semibold text-muted-foreground">
            FEATURED APPS
          </h2>
          <div className="space-y-4">
            <a
              href="#"
              className="flex items-start gap-4 group p-3 rounded-lg hover:bg-slate-50"
            >
              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold group-hover:text-blue-600">CRM</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive CRM platform for customer-facing teams.
                </p>
              </div>
              <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground" />
            </a>

            <a
              href="#"
              className="flex items-start gap-4 group p-3 rounded-lg hover:bg-slate-50"
            >
              <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold group-hover:text-blue-600">
                  Mail
                </h3>
                <p className="text-sm text-muted-foreground">
                  Secure email service for teams of all sizes.
                </p>
              </div>
              <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground" />
            </a>

            <a
              href="#"
              className="flex items-start gap-4 group p-3 rounded-lg hover:bg-slate-50"
            >
              <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold group-hover:text-blue-600">
                  Books
                </h3>
                <p className="text-sm text-muted-foreground">
                  Powerful accounting platform for growing businesses.
                </p>
              </div>
              <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground" />
            </a>

            <a
              href="#"
              className="flex items-start gap-4 group p-3 rounded-lg hover:bg-slate-50"
            >
              <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                <LayoutProjective className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold group-hover:text-blue-600">
                  Projects
                </h3>
                <p className="text-sm text-muted-foreground">
                  Manage, track, and collaborate on projects with teams.
                </p>
              </div>
              <ChevronRight className="h-5 w-5 ml-auto text-muted-foreground" />
            </a>
          </div>

          <button className="text-blue-600">
            EXPLORE ALL PRODUCTS
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="fixed bottom-0 left-0 right-0 bg-yellow-300 p-4">
        <div className="container text-sm">
          At Zoho, we do not use third-party software to track website visitors.
          We take your privacy seriously and use our own tools hosted in our
          data centres.
          <button size="sm" className="text-blue-600">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Zoho;
