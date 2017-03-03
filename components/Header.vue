<template>
  <header class="header">
    <el-row :gutter="20" class="navber">
      <el-col :span="4" class="logo">
        <nuxt-link to="/" rel="首页">公路商店 为了你不找边际的企图心</nuxt-link>
      </el-col>
      <el-col :span="16" class="nav">
        <ul>
          <li><nuxt-link to="/">文章</nuxt-link></li>
          <li><nuxt-link to="/shop">商品</nuxt-link></li>
          <li><nuxt-link to="/video">视频</nuxt-link></li>
        </ul>
      </el-col>
      <el-col :span="4">
        <ul class="grid-content bg-purple">
          <li>搜索</li>
        </ul>
      </el-col>
    </el-row>
  </header>
</template>
<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    z-index: 1020;
    left: 0;
    right: 0;
    background-color: #fff;
    margin: inherit;
    box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 -1px 0 rgba(0,0,0,.02);
    .el-col {
      height: 3.5rem;
      line-height: 3.5rem;
    }
    .navber {
      padding: 0 1rem;
      flex-shrink: 0;
      .logo {
        a {
          display: block;
          text-indent: -9999em;
          overflow: hidden;
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAgCAYAAADtwH1UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTExQzIyRjlGN0Y0MTFFNkJCRENFNTIxNEE1QkYwRjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTExQzIyRkFGN0Y0MTFFNkJCRENFNTIxNEE1QkYwRjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTFDMjJGN0Y3RjQxMUU2QkJEQ0U1MjE0QTVCRjBGMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTFDMjJGOEY3RjQxMUU2QkJEQ0U1MjE0QTVCRjBGMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgu5Y7IAAArNSURBVHja7JoJcJXVFcdfVgkkQCSQYCBSBYKRSgAtCGiRkWqLC0XRdkRKqaKiVmmxausSqigugynSWhFQgVqUUqUlDIpIIyEGKcguVHaIJU0IWwLZX8+d+V05c/2+916WdjrVO/OfvO/77nr2c25iAl+t9rAgR5AgCApOCGpbeI0LBdMEcYJ6QQV/m9W+IZgreF5w/n+BUF0FLwjuFyS14LzfhfAWa2FGS7aOgtPMXyXYIejT3EmzBMeZtFjQ4z/MgA6Cf7LeuhZm+p8UA0oFaYJUwUWCqwS3C6YI7kQQmtKechh9dUts/GLF2WVNnCNe/Y4RXCB4SPCmIFcwiG9Rgu3qAO95jI+ktRKkIEDDBD8SzBI0MO8x1inHTAQdlMKQQBPWfZW5n+ZdIpowqDlMeEttbmQjxvUX5KOOHwjuEvxVUOMcuIEN9xbUqXevYQLN+KWCG3yYcZtgNnMb8/KZoAw7H2wGzvFYy2jN5TDXbcasZQp+LHiCMx9QTF4ZSqt7YOtnQjjdRqhNbYXTkbSegvVqrDEvefyudg5rVP8B9VwkKPQgyltoim7DfAjYgDTvE3wq2MCcO5U21KFpr4NFEGqhoK2zTrTgFcYZIVohuFRwj2CJYL+HcLn4XNDJz95Xq8kfVt+MOh9Vk+Q0QgtuVuOMJNwCg6eo9+vo+4lyYnMEf1YMsyjwYIBpYwQbBe9i1gxDnxNMEgyEeLZ1E5xSc77WSK3WZutVTJkXsasxdwcRACOMy9GiL7UoVNfPiWgnZhj0rQg3nOowz477rXo3UZCtnh8UpOMvChzp6R5iLZcxkxhXAUNtG817Y6I+EoyCKZFqtZbyVzB976BBfxBMEPRlzlQiurB+LFM5Wy97P9r59nEjnGOeUvf7MHNHFRGMrZ3HcyHSbMzcZGfNURGsFes871Xr9IYwH/PuNFr3a5hr/MetYebvo8xXEN8VDd5Gs3bBmMzGONoZzmHnesS5R50+MyKce6waM1/Z5yqIMZR3c5TUPoP62nGLw6xhpP9JVN047MEw+4Cao8LHVJg9HVHP0x2TpdsQZ+z96tu3VRBhsCZS4vcSnFQD9/o42j96bP6BCOaPw1YaJ/g4kmLs+69wdPcKfqocnYlq/qHW2EXcHo4BD6oxhThXS/hDnGuzMiGGQD/HT1U4gUaczzrXO+e/UX1LI8u235ag3ZNYxzMxMwd+33EcJuq5TjAOB+xnhiymNELTcpSz/z1mLNZh1l+cmPyXgnYRzN1GUMK4Uzj8edj5RwSdWWs3fXIZd47jWB8PscYdztkHq2/nOoxcCMN1/2mudt3ndDBJy1mocpDNDqdvEh7diwmLQ0ipJvATasw+sF3Zd61lJTjrcnKBEREwYb0ycSmYBZ3YRSvt+p3gSsF4QaXqNznE/NNVP8PkDPWtu+NH33FykZMI+xf0GKzCMSOVP/FwnFaF+3hswEUZqtZRaZex5dvIoocjXV7jxuB37LstgqmOHwiiHaMpW3i1QuV0uyifU4lpCxB26jkXsQcvu+62VarfRiI1Hcprgk8lIhpJRaGz7n+ROtxHOBddhDvpbHKsUteXSFaWI/nzMSczib37Kbt8rZpjE8mefc4nu72QuaxU/QbfkArzvJh9ktA43SHQWr6Xs89a/E2Wylb7Y5o+wTc879juiT7ET3Gcda7zva+zx6GhQrUcCD+XDdY78XOiei4i1g0Qrt0Vob0PonLFEKrEWWc6NnIJxM6Fibv53prI5gcUyI6BnWjITiTXdfgBzGgR5YBerH83DG+F2ZuF9KejubbVhghBz1bPK/BhNarOtYvxlUj8KDLfz9hPZUAdzqtd4pQJ/sVEGRDzWaqHUREyIUYV2BZhkrSEjEblvy/4IYnao2THFco8lkCwNmEioa0qWWwH4+zzDKUhFtkwSL8b5zP/o05ZpSuWYCm+cz5hb4lPdryTfr6tNWZCZ7xXK3ueq76tFnwzQiZYx/g6oeJqimcvE5qOI0qxJigvhJ9ZHaIWFa8inCp8wFmqxG0dfamqK0XjC/UaY3yYu071eYn3m5RJXOzMU+XkBRb3+iUZs/ENtk3ANgeIKh4iOrIJybs+VcGA8hcZSHKASmAyv29k/r2k73uUjU6CWAORWNfExPisl6AuWhogWjUmMEBJeKUKrZfSz7UGdT61smx+V+PzAmruRCK6F/AhV+HbvEL0nrEeZYhrsc/5SNhaNnsZTLkE57wGlY3CNL1IKBf0WGgQkhKroq7BikA5lAGCOEPbkknWAqizbtO0HXVakvJdDer933G8Gfw9Qla/XtWrdKv3KXnHqouXTfw+rPoYp77AGXfceTbjfuZO/pyKuzfgLLb6pO7LkFatZn6FrGSfvKGA+DzgVChtDL0H+93FsdmnwtxW9VZ1mgrG26vO8QhQMmiNOdziscfrnHk7qTD1PSdLnhoieoqjvKLnvsNr45PD1LCPoA3GAV/hUTcaEIIoQxVhi7lpivYpV2xTyd9Cj1B4ZRhfM1D1PR5B+SKRKMk9r3sfYom4yiP/uFuNM/R5jL1/SPDhFjj7em2kn9OpliLZU5imzk5/nSccUHbdr43A4Z4bpt/MwJn/Wsh39lRDlBTuTtnG6dtC1HPccnmxWueQE2mN5KzP+kSOl6uxC0IU/GxZJcWrbh4N14yqvgGnt4bZ+CAkJZK+kbZUnG+Q/KAtJq4Gm/1pBHOMJ6J6hLNE0m5Xd8Z3UkrWwllJCOnn+N+GHgtw1u0hdiljq/AVy/ATvvH6/0tr3cj+RiCvoVzQlBZLxJfI2tGBr9v/dotqRF97V7wbdUvDZtaoKOOQSoS6oXbxxNNl2L0GfEtc4Mz9cAz94ilxVChbnoBknSIbt60H43Z4OFRb0UzGjsfiBEs8zt+Tcx1Gajswvg3mroy9ZuLQDxLmtkPC69hzvApjbVniYCTlgXAtBb9wkChnLFGISbfvwb72hSDbVUSQRVjbmfzhBA64N+FtEUStpBa1gerpDcrxduF3MTX9y3ieQ47SngRnOUQ8nww5H2J3Il8pp85jLlz+xtxxJFF72NOVJJXp2PDDrFdGnWwj15SXkk+sgtD98Rd5JHQDOctEhONYc7XkMerm9jqygZByOJGGLaB1U47cZsXmcL+gDNAVwryIpJWT6ndQIWw/GBmnQlJDyGEkaptxzqdVpntYJTRD0NDZSsJLuL2yydAEdWlzlDLEFTjPLpzDSPV5nNdetNv8oprobxPFyDHsP57cYBaCcHHA599O3KgnXDOT7ed3BaFYNuHdNUD/p0GD0oQGNlaNBkVTRcyCOFFoYS1adBPVwlqloSfIN26GkN0h3Gll9s7jdysIcIuqVtYHzvzTQBkSGmD8rQjG+zDZhp51CEkpGrxHMbsOBpTD+KcZW8N52hEmJzgms8kMKKCWEUMKn0BykYrpGEd839HnajDOKRGUosLW5kfTp4DDDHGilyRUO4PyhU2C0iF4D0xiL5j1Joy3/9zVhuf2jMlT97Z1mJQpSktsCdv6xw8U07IRpi1I9wref4e/bTGrT2JaM1vCB2zmoGnY8kUQ63sU0Irot4Nqo47ls5D8QgjQB4f1ufIZ9RBmP2sMUD7A9LmA268PSQbnsW4vvq9nTzdBmN0IQxqS25W/PfEVb6ha/20wIZ4KpvUHnYjT93G+bjBlACa0mHL5GkzY9WhuOjb/CO82oim+7d8CDABEilGWFdevxAAAAABJRU5ErkJggg==');
          width: 96px;
          height: 3.5rem;
          background-size: 96px 32px;
          background-position: center;
          background-repeat: no-repeat;
        }
      }
      .nav {
        text-align: center;
        ul {
          list-style: none;
          display: inline-block;
          padding: 0;
          margin: 0;
          li {
            float: left;
            a {
              padding: 0 1rem;
            }
          }
          &:after {
            content: "";
            display: table;
            clear: both;
          }
        }
      }
    }
  }
</style>
