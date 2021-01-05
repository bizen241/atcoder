program main
  implicit none

  integer N, rm

  read *, N
  rm = mod(N, 1000);

  if (rm == 0) then
    print *, 0
  else
    print '(i0)', 1000 - rm
  end if
end program main
