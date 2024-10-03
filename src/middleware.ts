import NextAuth from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'
import authConfig from './auth.config'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const { auth } = NextAuth(authConfig)

const authRoutes = ['/login', '/register']
const apiAuthPrefix = '/api/auth'

// Create the next-intl middleware
const intlMiddleware = createMiddleware(routing)

// Wrapper for the intl middleware
function applyIntlMiddleware(request: NextRequest) {
  return intlMiddleware(request)
}

// Combined middleware
export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  const locale = nextUrl.pathname.split('/')[1] // Assuming locale is the first path segment

  // console.log({ isLoggedIn, path: nextUrl.pathname, locale })

  // Allow all authentication API routes
  if (nextUrl.pathname.startsWith(apiAuthPrefix)) {
    return NextResponse.next()
  }

  // Redirect to /home if the user is logged in and tries to access auth routes
  if (isLoggedIn && authRoutes.some((route) => nextUrl.pathname.endsWith(route))) {
    return NextResponse.redirect(new URL(`/${locale}/home`, nextUrl))
  }

  // Redirect to /login if the user is not logged in and tries to access a protected route
  if (!isLoggedIn && !authRoutes.some((route) => nextUrl.pathname.endsWith(route)) && !nextUrl.pathname.endsWith('/')) {
    return NextResponse.redirect(new URL(`/${locale}/login`, nextUrl))
  }

  // Apply the intl middleware
  return applyIntlMiddleware(req)
})

export const config = {
  matcher: ['/', '/(es|en)/:path*'],
}
