--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: contact; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.contact (
    pid1 integer,
    pid2 integer,
    date date
);


ALTER TABLE public.contact OWNER TO root;

--
-- Name: people; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.people (
    pid integer NOT NULL,
    name character varying(80),
    age integer,
    infected boolean
);


ALTER TABLE public.people OWNER TO root;

--
-- Data for Name: contact; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.contact (pid1, pid2, date) FROM stdin;
2	3	2020-11-19
\.


--
-- Data for Name: people; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.people (pid, name, age, infected) FROM stdin;
1	Joe Blow	25	f
2	John Ron	32	t
3	Betty Spagetty	40	f
\.


--
-- Name: people people_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.people
    ADD CONSTRAINT people_pkey PRIMARY KEY (pid);


--
-- Name: contact contact_pid1_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.contact
    ADD CONSTRAINT contact_pid1_fkey FOREIGN KEY (pid1) REFERENCES public.people(pid);


--
-- Name: contact contact_pid2_fkey; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.contact
    ADD CONSTRAINT contact_pid2_fkey FOREIGN KEY (pid2) REFERENCES public.people(pid);


--
-- PostgreSQL database dump complete
--

