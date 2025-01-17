<script lang="ts">
  import type { UserData } from "../types";

    export let ticketData: UserData;
  </script>
  
  <section id="ticket-wrapper">
    <div class="congrats-text">
      <h2>
        Congrats, <span class="full-name">{ticketData.fullName}!</span> Your ticket is ready.
      </h2>
      <p class="email-sent">
        We've emailed your ticket to <strong>{ticketData.email}</strong> and will send update sin the run up to the event.
      </p>
    </div>
    <div id="ticket">
      <img src="/images/pattern-ticket.svg" alt="ticket">
      <div class="ticket-info">
        <div class="left">
          <div class="logo-date-place">
            <img width="150" src="/images/logo-mark.svg" alt="logo">
            <div class="texts">
              <p class="logo-text">
                Coding Conf
              </p>
              <p class="date-place">
                Jan 31, 2025 / Austin, TX
              </p>
            </div>
          </div>
          <div class="user">
            <img src={URL.createObjectURL(ticketData.avatar)} alt="Avatar" />
            <!-- <img src="/images/image-avatar.jpg" alt="Avatar"> -->
            <div class="name-github">
              <p class="full-name">{ticketData.fullName}</p>
              <div class="github-username">
                <img src="/images/icon-github.svg" alt="Github logo">
                <p>
                  {ticketData.githubUsername}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <p>
            #01609
          </p>
        </div>
      </div>
      
    </div>
  </section>
  
  <style lang="scss">

    @use "../variables" as vars;

    #ticket-wrapper {
      @include vars.container($m: 2rem 0 0);

      .congrats-text {
        h2 {
          margin-inline: auto;
          max-width: 90%;
          @include vars.tablet {
            max-width: 40rem;
            font-size: 3rem;
          }
          @include vars.text($size: 2rem, $weight: 700, $align: center, $m: 0 auto 1rem, $l-height: 1, $size-desktop: 3rem);
          .full-name {
            background: vars.$gradient-text;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
          }
        }
        p {
          max-width: 90%;
          @include vars.tablet {
            max-width: 34rem;
          }
          @include vars.text($size: 1rem, $align: center, $m: 1.5rem auto 1rem, $l-height: 1, $text-color: vars.$neutral-300);
          strong {
            @include vars.text($text-color: vars.$orange-500);
          }
        }
      }
      #ticket {
        @include vars.container($max-w: 100%, $m: 4rem auto 0, $p: 0 .25rem);
        @include vars.tablet {
          max-width: 35rem;
        }
        position: relative;
        .ticket-info {
          display: flex;
          justify-content: space-between;
          position: absolute;
          width: 95%;
          top: 1.5rem;
          left: 1rem;
          .left {
            @include vars.flex($direction: column, $align: start, $items-gap: 1.5rem);
            .logo-date-place {
              img {
                width: 1.5rem;
                @include vars.tablet {
                  width: 2.5rem;
                }
              }
              .texts {
                .logo-text {
                  @include vars.text($l-height: 1, $size: 1.25rem, $weight: 700, $m: 0 0 0);
                  @include vars.tablet {
                    font-size: 2rem;
                  }
                }
                @include vars.text($size: 0.65rem, $align: left, $m: 0rem 0, $text-color: vars.$neutral-300);
              }
              @include vars.flex($direction: row, $align: start, $items-gap: 1rem);
            }
            .user {
              @include vars.flex($direction: row, $align: start, $items-gap: 1rem);
              img {
                width: 3rem;
                border-radius: .5rem;
              }
              .name-github {
                @include vars.flex($direction: column, $align: start, $items-gap: .15rem);

                .full-name {
                  @include vars.text($size: 1rem, $weight: 700, $m: 0, $text-color: vars.$neutral-0);
                }

                .github-username {
                  @include vars.flex($direction: row, $align: start, $items-gap: .15rem);
                  img {
                    width: 1rem;
                  }
                  p {
                    @include vars.text($size: 0.75rem, $text-color: vars.$neutral-300);
                  }
                }
              }
            }
          }
          .right 
          {
            @include vars.flex(row, $align: center);
            p {
              transform: rotate(90deg);
              @include vars.text($size: 1.25rem, $weight: 500, $text-color: vars.$neutral-500);
            }
          }
        }
      }
    }
  </style>