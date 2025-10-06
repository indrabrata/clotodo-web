.PHONY: create-migrations
create-migrations:
	lein migratus create $(NAME)

.PHONY: migrate
migrate:
	lein migratus migrate

.PHONY: migrate-rollback
migrate:
	lein migratus rollback

